
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { generateSitemap, getSitemapUrls } from "./src/utils/sitemap";

// Crypto polyfill for Node.js build environment
const createCryptoPolyfill = () => {
  if (typeof globalThis.crypto === 'undefined') {
    const crypto = require('crypto');
    globalThis.crypto = {
      getRandomValues: function(array: any) {
        if (!array || typeof array.length !== 'number') {
          throw new Error('Invalid array provided to getRandomValues');
        }
        const buffer = crypto.randomBytes(array.length);
        for (let i = 0; i < array.length; i++) {
          array[i] = buffer[i];
        }
        return array;
      },
      randomUUID: function() {
        return crypto.randomUUID();
      },
      subtle: crypto.webcrypto?.subtle || {
        digest: async function(algorithm: string, data: any) {
          const hash = crypto.createHash(algorithm.toLowerCase().replace('-', ''));
          hash.update(data);
          return hash.digest();
        }
      }
    } as any;
  }
};

// Initialize crypto polyfill
createCryptoPolyfill();

// Generate sitemap during build
const sitemapPlugin = () => {
  return {
    name: 'sitemap-generator',
    generateBundle(options: any, bundle: any) {
      const urls = getSitemapUrls();
      const sitemap = generateSitemap(urls);
      
      // Use the bundle context to emit files
      bundle['sitemap.xml'] = {
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemap
      };

      // Generate robots.txt
      const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://autorply.sa/sitemap.xml`;

      bundle['robots.txt'] = {
        type: 'asset',
        fileName: 'robots.txt',
        source: robotsTxt
      };
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
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
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          router: ['react-router-dom'],
          seo: ['react-helmet-async']
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
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom', 'react-helmet-async'],
    force: false,
    esbuildOptions: {
      target: 'es2020'
    }
  }
}));
