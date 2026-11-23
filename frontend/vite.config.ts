import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  // titleProp matches Create React App's SVGR setup, which the SVG components rely on.
  plugins: [react(), svgr({ svgrOptions: { titleProp: true } })],
  build: { outDir: "build" },
});
