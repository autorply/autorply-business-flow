
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
      // Add crypto fallback for browser
      "crypto": "crypto-browserify",
    },
    fallback: {
      "crypto": "crypto-browserify",
      "buffer": "buffer",
      "process": "process/browser",
    }
  },
  define: {
    // Add crypto polyfill for build environment
    global: 'globalThis',
    // Define process for browser compatibility
    'process.env': {},
  },
  build: {
    // Optimize bundle size
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
    // Use esbuild for minification (more stable than terser)
    minify: mode === 'production' ? 'esbuild' : false,
    // Reduce chunk size
    chunkSizeWarningLimit: 1000,
    // Use more stable target
    target: 'es2020',
    sourcemap: mode === 'development',
    // Add commonjs options for better compatibility
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  // Add esbuild optimization with stable target
  esbuild: {
    target: 'es2020',
    minifyIdentifiers: mode === 'production',
    minifySyntax: mode === 'production',
    minifyWhitespace: mode === 'production'
  },
  // Add optimizeDeps to handle version conflicts
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    force: false,
    esbuildOptions: {
      target: 'es2020'
    }
  }
}));
