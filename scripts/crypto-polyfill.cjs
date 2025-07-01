
#!/usr/bin/env node

// CommonJS crypto polyfill for Node.js build environment
const crypto = require('crypto');

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
    console.log('Crypto polyfill setup completed');
  } catch (error) {
    console.warn('Failed to setup crypto polyfill:', error.message);
  }
}

module.exports = {};
