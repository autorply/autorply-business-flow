
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Ensure crypto polyfill is available during config resolution
if (typeof globalThis.crypto === 'undefined') {
  const crypto = require('crypto');
  globalThis.crypto = {
    getRandomValues: (array) => crypto.randomFillSync(array),
    subtle: {} as SubtleCrypto,
    randomUUID: () => crypto.randomUUID()
  };
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
      "crypto": "crypto-browserify",
    },
    fallback: {
      "crypto": "crypto-browserify",
      "buffer": "buffer",
      "process": "process/browser",
    }
  },
  define: {
    global: 'globalThis',
    'process.env': {},
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
