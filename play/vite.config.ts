import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import { resolve } from "path";

/* 路径方法 */
const pathResolver = (pathStr: string): string => {
  return resolve(__dirname, ".", pathStr);
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // publicDir
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": pathResolver("./src"),
    },
  },
  build: {
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true,
      },
    },
    brotliSize: false,
    chunkSizeWarningLimit: 1200,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "@/styles/global/index.less";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    open: false,
    https: false,
    proxy: {
      "/api": {
        target: "http://jarvis-dev.zparking-tech.com",
        changeOrigin: true,
        ws: false,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
