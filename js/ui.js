/**
 * UI Utilities - Handle user interface interactions
 */

const UI = {
    /**
     * Initialize UI components
     */
    init() {
        this.initMobileMenu();
        this.initSmoothScroll();
    },

    /**
     * Initialize mobile menu toggle
     */
    initMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.site-nav');

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('active');
                toggle.setAttribute('aria-expanded',
                    nav.classList.contains('active') ? 'true' : 'false'
                );
            });
        }
    },

    /**
     * Initialize smooth scrolling for anchor links
     */
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },

    /**
     * Format currency value
     * @param {number} amount - Amount to format
     * @returns {string} Formatted currency string
     */
    formatCurrency(amount) {
        return '£' + amount.toLocaleString('en-GB');
    },

    /**
     * Show loading state
     * @param {HTMLElement} element - Element to show loading on
     */
    showLoading(element) {
        if (element) {
            element.innerHTML = '<p class="text-center">Loading...</p>';
        }
    },

    /**
     * Show error message
     * @param {HTMLElement} element - Element to show error in
     * @param {string} message - Error message
     */
    showError(element, message) {
        if (element) {
            element.innerHTML = `
        <div class="card" style="background-color: #fee2e2; border-color: #dc2626;">
          <p style="color: #991b1b; margin: 0;"><strong>Error:</strong> ${message}</p>
        </div>
      `;
        }
    },

    /**
     * Create element with attributes
     * @param {string} tag - HTML tag name
     * @param {Object} attrs - Attributes object
     * @param {string} content - Inner content
     * @returns {HTMLElement} Created element
     */
    createElement(tag, attrs = {}, content = '') {
        const el = document.createElement(tag);
        Object.keys(attrs).forEach(key => {
            if (key === 'className') {
                el.className = attrs[key];
            } else {
                el.setAttribute(key, attrs[key]);
            }
        });
        if (content) {
            el.innerHTML = content;
        }
        return el;
    },

    /**
     * Debounce function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in ms
     * @returns {Function} Debounced function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Initialize UI on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UI.init());
} else {
    UI.init();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UI;
}
