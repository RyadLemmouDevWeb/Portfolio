import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      {
        find: /^pres$/,
        replacement: path.resolve(__dirname, 'src/component/partial/pres.jsx'),
      },
      {
        find: /^portfolio$/,
        replacement: path.resolve(__dirname, 'src/portfolio/portfolio.jsx'),
      },
    ],
  },
});
