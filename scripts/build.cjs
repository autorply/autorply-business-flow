
const { execSync } = require('child_process');

try {
  console.log('🚀 Starting build process...');
  
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
