import { defineConfig } from 'vite';

// GitHub Pages serves this project at https://<user>.github.io/chronova/
// so every built asset URL must start with /chronova/.
export default defineConfig({
  base: '/chronova/',
  server: { open: true },
  build: { target: 'es2020', cssCodeSplit: false },
});
