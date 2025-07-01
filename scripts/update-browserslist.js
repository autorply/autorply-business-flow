
#!/usr/bin/env node

const { execSync } = require('child_process');

try {
  console.log('Updating browserslist database...');
  execSync('npx update-browserslist-db@latest', { stdio: 'inherit' });
  console.log('Browserslist database updated successfully!');
} catch (error) {
  console.error('Failed to update browserslist database:', error.message);
  process.exit(1);
}
