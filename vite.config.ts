import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site (arjuntschand.github.io) is served at the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
  },
});
