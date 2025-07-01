
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('Cleaning build artifacts...');
  
  // Remove dist directory if it exists
  const distPath = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true, force: true });
    console.log('Removed dist directory');
  }
  
  // Update browserslist
  console.log('Updating browserslist...');
  execSync('npx update-browserslist-db@latest', { stdio: 'inherit' });
  
  // Clean build
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
