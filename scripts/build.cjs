
// Load crypto polyfill first
require('./crypto-polyfill.cjs');

const { execSync } = require('child_process');

try {
  console.log('🚀 Starting build with enhanced crypto polyfill...');
  
  // Set Node.js environment variables
  process.env.NODE_ENV = 'production';
  process.env.NODE_OPTIONS = '--max-old-space-size=4096';
  process.env.CRYPTO_POLYFILL_LOADED = 'true';
  
  // Verify crypto is available
  if (typeof globalThis.crypto === 'undefined' || typeof globalThis.crypto.getRandomValues !== 'function') {
    throw new Error('Crypto polyfill not properly loaded');
  }
  
  console.log('✅ Crypto polyfill verified and ready');
  
  // Run Vite build with the polyfill already loaded
  execSync('vite build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
      CRYPTO_POLYFILL_LOADED: 'true'
    }
  });
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}
