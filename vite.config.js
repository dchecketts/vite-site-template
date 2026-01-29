import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Tell Vite where your index.html is
  root: 'src',

  // Tell Vite where to put the final website
  build: {
    outDir: '../dist',
    emptyOutDir: true, // Deletes the old dist folder before each build
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
  },

  // This ensures the dev server works correctly with your root-level config
  server: {
    port: 3000,
    open: true,
  },
});
