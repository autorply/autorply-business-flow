
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
  console.log('🚀 Starting pre-rendered build process...');
  
  // Initialize crypto polyfill
  setupCrypto();
  
  // Set Node.js environment variables for pre-rendering
  process.env.NODE_ENV = 'production';
  process.env.NODE_OPTIONS = '--max-old-space-size=6144'; // Increased for pre-rendering
  process.env.PRERENDER = 'true';
  
  console.log('✅ Environment configured for pre-rendering');
  
  // Install prerender dependencies if needed
  console.log('📦 Checking pre-render dependencies...');
  try {
    execSync('npm list @prerenderer/renderer-puppeteer', { stdio: 'ignore' });
  } catch (error) {
    console.log('📦 Installing pre-render dependencies...');
    execSync('npm install @prerenderer/renderer-puppeteer --save-dev', { stdio: 'inherit' });
  }
  
  // Run Vite build with pre-rendering
  console.log('🏗️ Building with pre-rendering...');
  execSync('vite build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
      PRERENDER: 'true'
    }
  });
  
  console.log('✅ Pre-rendered build completed successfully!');
  console.log('📄 Pre-rendered pages available in dist/ directory');
  console.log('🔍 Each route now has its own HTML file with SEO content');
} catch (error) {
  console.error('❌ Pre-rendered build failed:', error.message);
  console.log('💡 Tip: Make sure you have Chrome/Chromium installed for Puppeteer');
  process.exit(1);
}
