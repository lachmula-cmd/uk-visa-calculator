#!/usr/bin/env node

/**
 * Validation script for UK Visa Calculator
 * Checks JSON integrity, route_id uniqueness, and fee reference validity
 */

const fs = require('fs');
const path = require('path');

// Color codes for console output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m'
};

let errors = 0;
let warnings = 0;

function error(msg) {
    console.error(`${colors.red}✗ ERROR: ${msg}${colors.reset}`);
    errors++;
}

function warn(msg) {
    console.warn(`${colors.yellow}⚠ WARNING: ${msg}${colors.reset}`);
    warnings++;
}

function success(msg) {
    console.log(`${colors.green}✓ ${msg}${colors.reset}`);
}

function info(msg) {
    console.log(`${colors.cyan}${msg}${colors.reset}`);
}

// Load JSON files
function loadJSON(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content);
    } catch (err) {
        error(`Failed to parse ${filePath}: ${err.message}`);
        return null;
    }
}

info('\n=== UK Visa Calculator - Data Validation ===\n');

// 1. Check JSON parsing
info('1. Checking JSON file integrity...');
const routes = loadJSON(path.join(__dirname, '../data/routes.json'));
const fees = loadJSON(path.join(__dirname, '../data/fees.json'));
const rules = loadJSON(path.join(__dirname, '../data/rules.json'));

if (!routes || !fees || !rules) {
    error('One or more JSON files failed to parse. Aborting validation.');
    process.exit(1);
}

success('All JSON files parsed successfully.');

// 2. Check route_id uniqueness
info('\n2. Checking route_id uniqueness...');
const routeIds = routes.map(r => r.route_id);
const duplicates = routeIds.filter((id, index) => routeIds.indexOf(id) !== index);
if (duplicates.length > 0) {
    error(`Duplicate route_ids found: ${duplicates.join(', ')}`);
} else {
    success('All route_ids are unique.');
}

// 3. Verify fee references exist
info('\n3. Verifying fee references...');
let missingFees = [];
routes.forEach(route => {
    if (route.fee_items && Array.isArray(route.fee_items)) {
        route.fee_items.forEach(feeKey => {
            if (!fees[feeKey]) {
                missingFees.push(`Route "${route.route_id}" references missing fee "${feeKey}"`);
            }
        });
    }
});

if (missingFees.length > 0) {
    missingFees.forEach(msg => error(msg));
} else {
    success('All fee references are valid.');
}

// 4. Check for required route fields
info('\n4. Checking required route fields...');
const requiredFields = ['route_id', 'name', 'category', 'indexable', 'apply_from_options', 'duration_policy', 'ihs_policy'];
routes.forEach(route => {
    requiredFields.forEach(field => {
        if (route[field] === undefined) {
            error(`Route "${route.route_id}" missing required field: ${field}`);
        }
    });
});

// 5. Check indexable routes have content files
info('\n5. Checking indexable routes have content files...');
const indexableRoutes = routes.filter(r => r.indexable === true);
let missingContent = [];
indexableRoutes.forEach(route => {
    const contentPath = path.join(__dirname, `../content/routes/${route.route_id}.json`);
    if (!fs.existsSync(contentPath)) {
        warn(`Indexable route "${route.route_id}" missing content file: ${contentPath}`);
    }
});

// 6. Summary
info('\n=== Validation Summary ===');
if (errors === 0 && warnings === 0) {
    success(`All checks passed! ✨`);
    process.exit(0);
} else {
    if (errors > 0) {
        console.log(`${colors.red}${errors} error(s) found${colors.reset}`);
    }
    if (warnings > 0) {
        console.log(`${colors.yellow}${warnings} warning(s) found${colors.reset}`);
    }
    process.exit(errors > 0 ? 1 : 0);
}
