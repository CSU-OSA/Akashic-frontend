import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), eslint()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      $: fileURLToPath(new URL("./config", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "https://api.dev.magicalsheep.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/casdoor": {
        target: "https://auth.dev.magicalsheep.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/casdoor/, ""),
      },
    },
  },
});
