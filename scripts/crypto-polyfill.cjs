
// CommonJS crypto polyfill for Node.js build environment
const crypto = require('crypto');

console.log('🔧 Setting up crypto polyfill...');
console.log('Current globalThis.crypto status:', typeof globalThis.crypto);

// Setup crypto polyfill for Node.js global scope
if (typeof globalThis.crypto === 'undefined') {
  try {
    globalThis.crypto = {
      getRandomValues: (array) => {
        return crypto.randomFillSync(array);
      },
      subtle: {},
      randomUUID: () => crypto.randomUUID()
    };
    
    // Also set it on global for older Node.js compatibility
    if (typeof global !== 'undefined') {
      global.crypto = globalThis.crypto;
    }
    
    console.log('✅ Crypto polyfill setup completed successfully');
    console.log('✅ globalThis.crypto.getRandomValues:', typeof globalThis.crypto.getRandomValues);
  } catch (error) {
    console.error('❌ Failed to setup crypto polyfill:', error.message);
    process.exit(1);
  }
} else {
  console.log('ℹ️ Crypto already available, skipping polyfill setup');
}

// Test the polyfill
try {
  const testArray = new Uint8Array(16);
  globalThis.crypto.getRandomValues(testArray);
  console.log('✅ Crypto polyfill test passed');
} catch (error) {
  console.error('❌ Crypto polyfill test failed:', error.message);
  process.exit(1);
}

module.exports = {};
