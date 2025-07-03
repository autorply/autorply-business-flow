
// Setup crypto polyfill before any other operations
require('./crypto-polyfill.cjs');

const { execSync } = require('child_process');

try {
  console.log('🚀 Preparing build environment...');
  
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
