import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Kickstarter/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        uk: './index-uk.html',
      },
    },
  },
});
