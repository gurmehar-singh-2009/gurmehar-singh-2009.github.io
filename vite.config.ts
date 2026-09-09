import { defineConfig } from "vite";

export default defineConfig({
  root: "web",

  server: {
    port: 3000,
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
