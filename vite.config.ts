import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { manifest } from "./manifest";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), VitePWA(manifest)],
});
