
// CommonJS crypto polyfill for Node.js build environment
const crypto = require('crypto');

console.log('🔧 Setting up crypto polyfill...');

// Create a proper crypto polyfill that mimics the Web Crypto API
const cryptoPolyfill = {
  getRandomValues: function(array) {
    if (!array || typeof array.length !== 'number') {
      throw new Error('Invalid array provided to getRandomValues');
    }
    
    // Use Node.js crypto to fill the array with random bytes
    const buffer = crypto.randomBytes(array.length);
    for (let i = 0; i < array.length; i++) {
      array[i] = buffer[i];
    }
    return array;
  },
  
  randomUUID: function() {
    return crypto.randomUUID();
  },
  
  subtle: {
    // Basic subtle implementation for build compatibility
    digest: async function(algorithm, data) {
      const hash = crypto.createHash(algorithm.toLowerCase().replace('-', ''));
      hash.update(data);
      return hash.digest();
    }
  }
};

// Setup crypto polyfill for Node.js global scope
if (typeof globalThis.crypto === 'undefined') {
  try {
    globalThis.crypto = cryptoPolyfill;
    
    // Also set it on global for older Node.js compatibility
    if (typeof global !== 'undefined') {
      global.crypto = cryptoPolyfill;
    }
    
    // Set on process.env for build tools that might need it
    if (typeof process !== 'undefined' && process.env) {
      process.env.CRYPTO_POLYFILL_LOADED = 'true';
    }
    
    console.log('✅ Crypto polyfill setup completed successfully');
  } catch (error) {
    console.error('❌ Failed to setup crypto polyfill:', error.message);
    process.exit(1);
  }
} else {
  console.log('ℹ️ Crypto already available, enhancing existing implementation');
  
  // Enhance existing crypto if needed
  if (!globalThis.crypto.getRandomValues) {
    globalThis.crypto.getRandomValues = cryptoPolyfill.getRandomValues;
  }
  if (!globalThis.crypto.randomUUID) {
    globalThis.crypto.randomUUID = cryptoPolyfill.randomUUID;
  }
}

// Test the polyfill
try {
  const testArray = new Uint8Array(16);
  globalThis.crypto.getRandomValues(testArray);
  console.log('✅ Crypto polyfill test passed');
  console.log('✅ globalThis.crypto methods:', Object.keys(globalThis.crypto));
} catch (error) {
  console.error('❌ Crypto polyfill test failed:', error.message);
  process.exit(1);
}

module.exports = { cryptoPolyfill };
