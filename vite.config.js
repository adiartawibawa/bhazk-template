import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

export default defineConfig({
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "./src")}`, //`${path.resolve(__dirname, "./src")}`
    },
  },
  plugins: [
    Vue(),
    Pages({
      extensions: ["vue"],
    }),
    Layouts(),
  ],
});
