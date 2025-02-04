import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'pennsieveUILibrary',
      fileName: (format) => `pennsieve-ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // Peer dependency
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});