import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'pennsieveTestLibrary',
      fileName: (format) => `pennsieve-test-library.${format}.js`,
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