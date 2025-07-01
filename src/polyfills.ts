
// Crypto polyfill for build environment
if (typeof globalThis.crypto === 'undefined') {
  const nodeCrypto = require('crypto');
  globalThis.crypto = {
    getRandomValues: (array: Uint8Array) => {
      return nodeCrypto.randomFillSync(array);
    },
    subtle: {} as SubtleCrypto,
    randomUUID: () => nodeCrypto.randomUUID()
  } as Crypto;
}

export {};
