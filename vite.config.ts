
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Load crypto polyfill for build environment
if (typeof globalThis.crypto === 'undefined') {
  try {
    const crypto = require('crypto');
    
    // Create a proper SubtleCrypto implementation
    const subtleCrypto = {
      decrypt: async () => { throw new Error('Not implemented'); },
      deriveBits: async () => { throw new Error('Not implemented'); },
      deriveKey: async () => { throw new Error('Not implemented'); },
      digest: async (algorithm: string, data: BufferSource) => {
        const hash = crypto.createHash(algorithm.toLowerCase().replace('-', ''));
        hash.update(data);
        return hash.digest();
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
    
    globalThis.crypto = {
      getRandomValues: (array: any) => {
        const buffer = crypto.randomBytes(array.length);
        for (let i = 0; i < array.length; i++) {
          array[i] = buffer[i];
        }
        return array;
      },
      randomUUID: () => crypto.randomUUID(),
      subtle: subtleCrypto as SubtleCrypto
    };
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
