import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "WhatsAppWidget",
      fileName: (format) => `kk-whatsapp-widget.${format}.js`,
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
