import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Keep HMR logic for smooth development
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  build: {
    outDir: 'dist',
    // Ensures clean builds for Vercel
    emptyOutDir: true,
  }
});