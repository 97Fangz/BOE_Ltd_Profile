import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(), // React plugin for Vite
    tsconfigPaths() // Allows TypeScript path aliases
  ],
  resolve: {
    alias: {
      '@': '/src' // Alias @ to point to the src folder
    }
  },
  server: {
    port: 3000, // You can specify your desired port
    open: true, // Automatically opens the app in the browser when the server starts
  },
  build: {
    outDir: 'dist', // Specify the output directory for build files
  }
});
