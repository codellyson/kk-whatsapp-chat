import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "WhatsAppWidget",
      fileName: (format) => `whatsapp-widget.${format}.js`,
      formats: ["es", "umd", "iife"],
    },
    rollupOptions: {
      output: {
        globals: {
          // If you have any external dependencies, define them here
        },
      },
    },
    sourcemap: true,
    minify: "esbuild",
    cssCodeSplit: false,
  },
});
