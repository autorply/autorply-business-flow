
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('🧹 Cleaning build artifacts...');
  
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
