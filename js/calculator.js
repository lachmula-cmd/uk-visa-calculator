/**
 * Calculator - Core visa cost calculation logic
 */

const Calculator = {
    routes: null,
    fees: null,
    rules: null,

    /**
     * Initialize calculator with data
     */
    async init() {
        try {
            [this.routes, this.fees, this.rules] = await Promise.all([
                DataLoader.getRoutes(),
                DataLoader.getFees(),
                DataLoader.getRules()
            ]);
        } catch (error) {
            console.error('Failed to initialize calculator:', error);
            throw error;
        }
    },

    /**
     * Calculate visa costs
     * @param {Object} params - Calculation parameters
     * @returns {Object} Calculation result with breakdown
     */
    calculate(params) {
        const {
            routeId,
            applyFrom,
            duration,
            applicants = 1,
            dependants = 0,
            addPriority = false,
            addSuperPriority = false
        } = params;

        const route = this.routes.find(r => r.route_id === routeId);
        if (!route) {
            throw new Error('Route not found');
        }

        const breakdown = [];
        let total = 0;

        // Application fees
        const feeKey = this.getFeeKey(route, applyFrom);
        if (feeKey && this.fees[feeKey]) {
            const feeAmount = this.getFeeAmount(feeKey, applyFrom);
            const totalApplicants = parseInt(applicants) + parseInt(dependants);
            const applicationCost = feeAmount * totalApplicants;

            breakdown.push({
                item: `Application Fee (${totalApplicants} applicant${totalApplicants > 1 ? 's' : ''})`,
                amount: applicationCost
            });
            total += applicationCost;
        }

        // Immigration Health Surcharge
        if (route.ihs_policy !== 'not_required' && route.ihs_policy !== 'exempt') {
            const ihsCost = this.calculateIHS(route, duration, applicants, dependants);
            if (ihsCost > 0) {
                breakdown.push({
                    item: 'Immigration Health Surcharge',
                    amount: ihsCost
                });
                total += ihsCost;
            }
        }

        // Priority services
        if (addPriority && route.extras_supported.includes('priority')) {
            const priorityCost = this.getPriorityFee(applyFrom) * (parseInt(applicants) + parseInt(dependants));
            breakdown.push({
                item: 'Priority Service',
                amount: priorityCost
            });
            total += priorityCost;
        }

        if (addSuperPriority && route.extras_supported.includes('super_priority')) {
            const superPriorityCost = this.getSuperPriorityFee(applyFrom) * (parseInt(applicants) + parseInt(dependants));
            breakdown.push({
                item: 'Super Priority Service',
                amount: superPriorityCost
            });
            total += superPriorityCost;
        }

        // Citizenship ceremony for citizenship applications
        if (route.extras_supported.includes('citizenship_ceremony')) {
            const ceremonyCost = this.fees['citizenship_ceremony'].amount_inside_uk * (parseInt(applicants) + parseInt(dependants));
            breakdown.push({
                item: 'Citizenship Ceremony',
                amount: ceremonyCost
            });
            total += ceremonyCost;
        }

        // Life in the UK test for ILR/Citizenship
        if (routeId.includes('indefinite-leave') || routeId.includes('citizenship')) {
            const testCost = 50 * (parseInt(applicants) + parseInt(dependants));
            breakdown.push({
                item: 'Life in the UK Test',
                amount: testCost
            });
            total += testCost;
        }

        return {
            breakdown,
            total,
            lastReviewed: route.last_reviewed
        };
    },

    /**
     * Calculate Immigration Health Surcharge
     */
    calculateIHS(route, durationMonths, applicants, dependants) {
        let rate = this.rules.ihs_rates.standard.rate_per_year;

        // Use student rate if applicable
        if (route.ihs_policy === 'required_student') {
            rate = this.rules.ihs_rates.student.rate_per_year;
        }

        // Convert months to years, round up to nearest 0.5
        const years = Math.ceil(durationMonths / 6) * 0.5;

        const totalApplicants = parseInt(applicants) + parseInt(dependants);
        return rate * years * totalApplicants;
    },

    /**
     * Get fee key for route and location
     */
    getFeeKey(route, applyFrom) {
        const feeItems = route.fee_items;
        if (!feeItems || feeItems.length === 0) return null;

        // Find fee item matching location
        if (applyFrom === 'inside_uk') {
            return feeItems.find(f => f.includes('inside')) || feeItems[0];
        } else {
            return feeItems.find(f => f.includes('outside')) || feeItems[0];
        }
    },

    /**
     * Get fee amount for location
     */
    getFeeAmount(feeKey, applyFrom) {
        const fee = this.fees[feeKey];
        if (!fee) return 0;

        if (applyFrom === 'inside_uk' && fee.amount_inside_uk !== null) {
            return fee.amount_inside_uk;
        }
        if (applyFrom === 'outside_uk' && fee.amount_outside_uk !== null) {
            return fee.amount_outside_uk;
        }

        // Fallback
        return fee.amount_inside_uk || fee.amount_outside_uk || 0;
    },

    /**
     * Get priority service fee
     */
    getPriorityFee(applyFrom) {
        const fee = this.fees['priority'];
        return applyFrom === 'inside_uk' ? fee.amount_inside_uk : fee.amount_outside_uk;
    },

    /**
     * Get super priority service fee
     */
    getSuperPriorityFee(applyFrom) {
        const fee = this.fees['super_priority'];
        return applyFrom === 'inside_uk' ? fee.amount_inside_uk : fee.amount_outside_uk;
    },

    /**
     * Render calculator form for a specific route
     */
    renderForm(routeId, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const route = this.routes.find(r => r.route_id === routeId);
        if (!route) {
            container.innerHTML = '<p>Route not found</p>';
            return;
        }

        let html = `
      <form id="calc-form" class="calculator-form">
        <div class="estimate-banner">
          <strong>Estimates Only:</strong> Verify all costs with official UK government sources before applying. 
          Fees shown are based on data last reviewed: <strong>${route.last_reviewed}</strong>
        </div>
    `;

        // Apply from (if both options available)
        if (route.apply_from_options === 'both') {
            html += `
        <div class="form-group">
          <label for="apply-from" class="form-label">Applying From</label>
          <select id="apply-from" class="form-select" required>
            <option value="outside_uk">Outside UK</option>
            <option value="inside_uk">Inside UK</option>
          </select>
        </div>
      `;
        } else {
            html += `<input type="hidden" id="apply-from" value="${route.apply_from_options}">`;
        }

        // Duration
        if (route.duration_policy === 'fixed' && route.duration_options) {
            html += `
        <div class="form-group">
          <label for="duration" class="form-label">Visa Duration (months)</label>
          <select id="duration" class="form-select" required>
            ${route.duration_options.map(d => `<option value="${d}">${d} months</option>`).join('')}
          </select>
        </div>
      `;
        } else if (route.duration_policy === 'custom') {
            html += `
        <div class="form-group">
          <label for="duration" class="form-label">Visa Duration (months)</label>
          <input type="number" id="duration" class="form-input" min="1" max="${route.max_duration_months || 60}" value="12" required>
        </div>
      `;
        } else if (route.duration_policy === 'permanent') {
            html += `<input type="hidden" id="duration" value="0">`;
        }

        // Applicants
        html += `
      <div class="form-group">
        <label for="applicants" class="form-label">Number of Main Applicants</label>
        <input type="number" id="applicants" class="form-input" min="1" max="10" value="1" required>
      </div>
      
      <div class="form-group">
        <label for="dependants" class="form-label">Number of Dependants</label>
        <input type="number" id="dependants" class="form-input" min="0" max="10" value="0">
      </div>
    `;

        // Priority services
        if (route.extras_supported.includes('priority')) {
            html += `
        <div class="form-group">
          <label>
            <input type="checkbox" id="add-priority"> Add Priority Service
          </label>
        </div>
      `;
        }

        if (route.extras_supported.includes('super_priority')) {
            html += `
        <div class="form-group">
          <label>
            <input type="checkbox" id="add-super-priority"> Add Super Priority Service
          </label>
        </div>
      `;
        }

        html += `
        <button type="submit" class="btn btn-primary" style="width: 100%;">Calculate Total Cost</button>
      </form>
      
      <div id="calc-result" class="calculator-result" style="display: none;"></div>
    `;

        container.innerHTML = html;

        // Add form submit handler
        document.getElementById('calc-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleCalculate(routeId);
        });
    },

    /**
     * Handle calculation
     */
    handleCalculate(routeId) {
        // Get form values
        const applyFrom = document.getElementById('apply-from')?.value;
        const durationInput = document.getElementById('duration');
        const applicantsInput = document.getElementById('applicants');
        const dependantsInput = document.getElementById('dependants');

        const duration = parseInt(durationInput?.value || 0);
        const applicants = parseInt(applicantsInput?.value || 1);
        const dependants = parseInt(dependantsInput?.value || 0);

        // Validation
        const errors = [];

        if (!applyFrom) {
            errors.push('Please select where you are applying from.');
        }

        if (durationInput && (isNaN(duration) || duration < 1)) {
            errors.push('Please enter a valid visa duration (at least 1 month).');
        }

        if (isNaN(applicants) || applicants < 1 || applicants > 10) {
            errors.push('Number of main applicants must be between 1 and 10.');
        }

        if (isNaN(dependants) || dependants < 0 || dependants > 10) {
            errors.push('Number of dependants must be between 0 and 10.');
        }

        // Display errors if any
        if (errors.length > 0) {
            const resultDiv = document.getElementById('calc-result');
            if (resultDiv) {
                let errorHtml = '<div class="card" style="border-color: var(--color-accent); background-color: #fef3c7;">';
                errorHtml += '<h3 style="color: #92400e;">⚠️ Please fix the following:</h3>';
                errorHtml += '<ul style="margin-bottom: 0; color: #78350f;">';
                errors.forEach(err => {
                    errorHtml += `<li>${err}</li>`;
                });
                errorHtml += '</ul></div>';
                resultDiv.innerHTML = errorHtml;
                resultDiv.style.display = 'block';
                resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            return;
        }

        // All valid, proceed with calculation
        const params = {
            routeId,
            applyFrom,
            duration,
            applicants,
            dependants,
            addPriority: document.getElementById('add-priority')?.checked || false,
            addSuperPriority: document.getElementById('add-super-priority')?.checked || false
        };

        const result = this.calculate(params);
        this.displayResult(result);
    },

    /**
     * Display calculation result
     */
    displayResult(result) {
        const resultDiv = document.getElementById('calc-result');
        if (!resultDiv) return;

        let html = '<ul class="result-breakdown">';
        result.breakdown.forEach(item => {
            html += `<li><span>${item.item}</span><span>${UI.formatCurrency(item.amount)}</span></li>`;
        });
        html += `<li><span><strong>Total Estimated Cost</strong></span><span><strong>${UI.formatCurrency(result.total)}</strong></span></li>`;
        html += '</ul>';

        resultDiv.innerHTML = html;
        resultDiv.style.display = 'block';
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
}
