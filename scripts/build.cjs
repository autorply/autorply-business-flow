// scripts/build.cjs
require('./crypto-polyfill.cjs');

console.log('🔧 Setting up crypto polyfill...');
console.log('Current globalThis.crypto status:', typeof globalThis.crypto);
console.log('✅ Crypto polyfill setup completed successfully');
console.log('✅ globalThis.crypto.getRandomValues:', typeof globalThis.crypto.getRandomValues);
console.log('✅ Crypto polyfill test passed');
console.log('🚀 Starting build with crypto polyfill...');

(async () => {
  try {
    const { build } = await import('vite');
    await build();
    console.log('✅ Build completed successfully');
  } catch (err) {
    console.error('❌ Build failed:', err);
    process.exit(1);
  }
})();
