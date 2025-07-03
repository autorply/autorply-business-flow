
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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
    console.log('✅ Crypto polyfill initialized for clean build');
  }
};

try {
  console.log('🧹 Cleaning build artifacts...');
  
  // Initialize crypto polyfill
  setupCrypto();
  
  // Remove dist directory if it exists
  const distPath = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true, force: true });
    console.log('🗑️ Removed dist directory');
  }
  
  // Remove .vite cache directory if it exists
  const viteCachePath = path.join(process.cwd(), 'node_modules/.vite');
  if (fs.existsSync(viteCachePath)) {
    fs.rmSync(viteCachePath, { recursive: true, force: true });
    console.log('🗑️ Removed Vite cache');
  }
  
  // Update browserslist
  console.log('📦 Updating browserslist...');
  try {
    execSync('npx update-browserslist-db@latest', { stdio: 'inherit' });
  } catch (updateError) {
    console.warn('⚠️ Could not update browserslist, continuing...');
  }
  
  // Clean build
  console.log('🔨 Building project...');
  execSync('NODE_OPTIONS="--max-old-space-size=4096" npm run build', { 
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
