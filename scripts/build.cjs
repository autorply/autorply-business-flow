
// Load crypto polyfill first
require('./crypto-polyfill.cjs');

const { execSync } = require('child_process');

try {
  console.log('🚀 Starting build with crypto polyfill...');
  
  // Set Node.js environment variables
  process.env.NODE_ENV = 'production';
  process.env.NODE_OPTIONS = '--max-old-space-size=4096';
  
  // Run Vite build with the polyfill already loaded
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
