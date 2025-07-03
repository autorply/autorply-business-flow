
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Define missing types for Node.js crypto polyfill
type BufferSource = ArrayBufferView | ArrayBuffer;

interface JsonWebKey {
  kty: string;
  use?: string;
  key_ops?: string[];
  alg?: string;
  kid?: string;
  x5u?: string;
  x5c?: string[];
  x5t?: string;
  x5t_S256?: string;
  [key: string]: any;
}

interface CryptoKey {
  algorithm: any;
  extractable: boolean;
  type: string;
  usages: string[];
}

interface CryptoKeyPair {
  privateKey: CryptoKey;
  publicKey: CryptoKey;
}

interface SubtleCrypto {
  decrypt: (algorithm: any, key: CryptoKey, data: BufferSource) => Promise<ArrayBuffer>;
  deriveBits: (algorithm: any, baseKey: CryptoKey, length: number) => Promise<ArrayBuffer>;
  deriveKey: (algorithm: any, baseKey: CryptoKey, derivedKeyType: any, extractable: boolean, keyUsages: string[]) => Promise<CryptoKey>;
  digest: (algorithm: string, data: BufferSource) => Promise<ArrayBuffer>;
  encrypt: (algorithm: any, key: CryptoKey, data: BufferSource) => Promise<ArrayBuffer>;
  exportKey: (format: string, key: CryptoKey) => Promise<ArrayBuffer | JsonWebKey>;
  generateKey: (algorithm: any, extractable: boolean, keyUsages: string[]) => Promise<CryptoKey | CryptoKeyPair>;
  importKey: (format: string, keyData: BufferSource | JsonWebKey, algorithm: any, extractable: boolean, keyUsages: string[]) => Promise<CryptoKey>;
  sign: (algorithm: any, key: CryptoKey, data: BufferSource) => Promise<ArrayBuffer>;
  unwrapKey: (format: string, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: any, unwrappedKeyAlgorithm: any, extractable: boolean, keyUsages: string[]) => Promise<CryptoKey>;
  verify: (algorithm: any, key: CryptoKey, signature: BufferSource, data: BufferSource) => Promise<boolean>;
  wrapKey: (format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: any) => Promise<ArrayBuffer>;
}

interface Crypto {
  getRandomValues: <T extends ArrayBufferView>(array: T) => T;
  randomUUID: () => string;
  subtle: SubtleCrypto;
  CryptoKey: typeof CryptoKey;
}

// Load crypto polyfill for build environment
if (typeof globalThis.crypto === 'undefined') {
  try {
    const crypto = require('crypto');
    
    // Create a proper SubtleCrypto implementation
    const subtleCrypto: SubtleCrypto = {
      decrypt: async () => { throw new Error('Not implemented'); },
      deriveBits: async () => { throw new Error('Not implemented'); },
      deriveKey: async () => { throw new Error('Not implemented'); },
      digest: async (algorithm: string, data: BufferSource) => {
        const hash = crypto.createHash(algorithm.toLowerCase().replace('-', ''));
        hash.update(Buffer.from(data as ArrayBuffer));
        return hash.digest().buffer;
      },
      encrypt: async () => { throw new Error('Not implemented'); },
      exportKey: async () => { throw new Error('Not implemented'); },
      generateKey: async () => { throw new Error('Not implemented'); },
      importKey: async () => { throw new Error('Not implemented'); },
      sign: async () => { throw new Error('Not implemented'); },
      unwrapKey: async () => { throw new Error('Not implemented'); },
      verify: async () => { throw new Error('Not implemented'); },
      wrapKey: async () => { throw new Error('Not implemented'); }
    };
    
    const cryptoPolyfill: Crypto = {
      getRandomValues: <T extends ArrayBufferView>(array: T): T => {
        const buffer = crypto.randomBytes(array.byteLength);
        const view = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
        view.set(buffer);
        return array;
      },
      randomUUID: () => crypto.randomUUID(),
      subtle: subtleCrypto,
      CryptoKey: CryptoKey as any
    };
    
    globalThis.crypto = cryptoPolyfill as any;
  } catch (e) {
    console.warn('Could not setup crypto polyfill in vite config');
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: 'globalThis',
    'process.env': {},
    // Ensure crypto is available in browser build
    'globalThis.crypto': 'globalThis.crypto || {}',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    },
    minify: mode === 'production' ? 'esbuild' : false,
    chunkSizeWarningLimit: 1000,
    target: 'es2020',
    sourcemap: mode === 'development',
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  esbuild: {
    target: 'es2020',
    minifyIdentifiers: mode === 'production',
    minifySyntax: mode === 'production',
    minifyWhitespace: mode === 'production'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    force: false,
    esbuildOptions: {
      target: 'es2020'
    }
  }
}));
