import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@popperjs/core": "@popperjs/core/dist/umd/popper.js",
    },
  },
  optimizeDeps: {
    include: ["@popperjs/core"],
  },
});
