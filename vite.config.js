import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import viteCompression from 'vite-plugin-compression';

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        plugins: [viteCompression()],"skipLibCheck": true,
        isCustomElement:(tag) => tag.startsWith("lr-"),
      }
    }
  }), pluginRewriteAll()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser",
      },
    ],
  },
  server: {
    host: '0.0.0.0'
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
