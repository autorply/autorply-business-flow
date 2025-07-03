
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
    console.log('✅ Crypto polyfill initialized for pre-build');
  }
};

try {
  console.log('🚀 Preparing build environment...');
  
  // Initialize crypto polyfill
  setupCrypto();
  
  // Set Node.js environment variables
  process.env.NODE_ENV = 'production';
  process.env.NODE_OPTIONS = '--max-old-space-size=4096';
  
  // Update browserslist
  console.log('📦 Updating browserslist database...');
  execSync('npx update-browserslist-db@latest', { stdio: 'inherit' });
  
  console.log('✅ Build environment ready!');
} catch (error) {
  console.error('❌ Pre-build failed:', error.message);
  process.exit(1);
}
</lov-script>
