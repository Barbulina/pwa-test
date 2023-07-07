import { VitePWAOptions } from "vite-plugin-pwa";

export const manifest: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    short_name: "PWA Cobee",
    name: "PWA Cobee: I want be a APP!",
    icons: [
      {
        src: "assets/app-icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "assets/app-icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "assets/app-icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "assets/app-icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#5D1CE3",
    background_color: "#5D1CE3",
    display: "fullscreen",
    start_url: "/",
    scope: "/",
    orientation: "portrait",
    description: "it's a POC",
  },
};
