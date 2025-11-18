// Configuration file for API endpoints
// Save this as: frontend/config.js

const CONFIG = {
    // For local development
    LOCAL_API_URL: 'http://127.0.0.1:8001',
    
    // For Render deployment - REPLACE WITH YOUR ACTUAL RENDER URL
    // Example: 'https://ti-bot-abc123.onrender.com'
    PRODUCTION_API_URL: 'https://ti-7c8k.onrender.com/',
    
    // Auto-detect environment
    isProduction: window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1',
    
    // Get the correct API URL based on environment
    getApiUrl() {
        return this.isProduction ? this.PRODUCTION_API_URL : this.LOCAL_API_URL;
    },
    
    // Get the correct endpoint
    getEndpoint(path) {
        const baseUrl = this.getApiUrl();
        return `${baseUrl}${path}`;
    }
};

// Export for use in other scripts
window.CONFIG = CONFIG;

// Log current environment for debugging
console.log('Environment:', CONFIG.isProduction ? 'Production' : 'Development');
console.log('API URL:', CONFIG.getApiUrl());
