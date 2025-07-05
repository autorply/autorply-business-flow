
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
  console.log('🚀 Starting optimized build process...');
  
  // Initialize crypto polyfill
  setupCrypto();
  
  // Set Node.js environment variables
  process.env.NODE_ENV = 'production';
  process.env.NODE_OPTIONS = '--max-old-space-size=6144';
  
  console.log('✅ Environment configured for production build');
  
  // Run Vite build
  console.log('🏗️ Building with Vite...');
  execSync('vite build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production'
    }
  });
  
  console.log('✅ Build completed successfully!');
  console.log('📄 Static files ready in dist/ directory');
  console.log('🔍 SEO optimized with meta tags and structured data');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
