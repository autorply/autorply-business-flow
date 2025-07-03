
const { execSync } = require('child_process');

// Setup crypto polyfill for Node.js environment
const setupCrypto = () => {
  if (typeof globalThis.crypto === 'undefined') {
    const crypto = require('crypto');
    globalThis.crypto = {
      getRandomValues: function(array) {
        if (!array || typeof array.length !== 'number') {
          throw new Error('Invalid array provided to getRandomValues');
        }
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
        digest: async function(algorithm, data) {
          const hash = crypto.createHash(algorithm.toLowerCase().replace('-', ''));
          hash.update(data);
          return hash.digest();
        }
      }
    };
    console.log('✅ Crypto polyfill initialized for build');
  }
};

try {
  console.log('🚀 Starting build process...');
  
  // Initialize crypto polyfill
  setupCrypto();
  
  // Set Node.js environment variables
  process.env.NODE_ENV = 'production';
  process.env.NODE_OPTIONS = '--max-old-space-size=4096';
  
  console.log('✅ Environment configured');
  
  // Run Vite build
  execSync('vite build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production'
    }
  });
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
