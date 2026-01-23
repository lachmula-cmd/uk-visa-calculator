/**
 * Data Loader - Handles loading and caching of JSON data files
 */

const DataLoader = {
  cache: {},

  /**
   * Get the base path for the site (handles GitHub Pages subpaths)
   * @returns {string} Base path with trailing slash
   */
  getBasePath() {
    // Check if we're in a subdirectory by examining current path
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;

    // If we're at root or in a route page, return appropriate base
    if (depth === 0 || path === '/') {
      return './';
    } else if (depth === 1 && path.endsWith('/')) {
      return '../';
    } else if (depth === 2 && path.endsWith('/')) {
      return '../../';
    } else if (depth === 3 && path.endsWith('/')) {
      return '../../../';
    } else {
      return './';
    }
  },

  /**
   * Resolve a data path relative to current page
   * @param {string} path - Relative path from site root (e.g., 'data/routes.json')
   * @returns {string} Resolved path
   */
  resolvePath(path) {
    const basePath = this.getBasePath();
    return basePath + path;
  },

  /**
   * Load JSON data with caching
   * @param {string} url - URL to JSON file
   * @returns {Promise<Object>} Parsed JSON data
   */
  async load(url) {
    // Return cached data if available
    if (this.cache[url]) {
      return this.cache[url];
    }

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.status}`);
      }

      const data = await response.json();
      this.cache[url] = data;
      return data;
    } catch (error) {
      console.error('DataLoader error:', error);
      throw error;
    }
  },

  /**
   * Load multiple JSON files in parallel
   * @param {Array<string>} urls - Array of URLs
   * @returns {Promise<Array<Object>>} Array of parsed JSON data
   */
  async loadMultiple(urls) {
    return Promise.all(urls.map(url => this.load(url)));
  },

  /**
   * Get all routes
   * @returns {Promise<Array>} Routes array
   */
  async getRoutes() {
    return this.load(this.resolvePath('data/routes.json'));
  },

  /**
   * Get fees database
   * @returns {Promise<Object>} Fees object
   */
  async getFees() {
    return this.load(this.resolvePath('data/fees.json'));
  },

  /**
   * Get global rules
   * @returns {Promise<Object>} Rules object
   */
  async getRules() {
    return this.load(this.resolvePath('data/rules.json'));
  },

  /**
   * Get site config
   * @returns {Promise<Object>} Site config object
   */
  async getSiteConfig() {
    return this.load(this.resolvePath('data/site.json'));
  },

  /**
   * Get route content (intro, FAQs, examples)
   * @param {string} routeId - Route identifier
   * @returns {Promise<Object>} Route content object
   */
  async getRouteContent(routeId) {
    return this.load(this.resolvePath(`content/routes/${routeId}.json`));
  },

  /**
   * Get route by ID
   * @param {string} routeId - Route identifier
   * @returns {Promise<Object|null>} Route object or null
   */
  async getRouteById(routeId) {
    const routes = await this.getRoutes();
    return routes.find(r => r.route_id === routeId) || null;
  },

  /**
   * Get routes by category
   * @param {string} category - Category name
   * @returns {Promise<Array>} Filtered routes array
   */
  async getRoutesByCategory(category) {
    const routes = await this.getRoutes();
    return routes.filter(r => r.category === category);
  },

  /**
   * Get indexable routes only
   * @returns {Promise<Array>} Indexable routes array
   */
  async getIndexableRoutes() {
    const routes = await this.getRoutes();
    return routes.filter(r => r.indexable === true);
  },

  /**
   * Clear cache
   */
  clearCache() {
    this.cache = {};
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataLoader;
}
