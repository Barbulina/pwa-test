import { VitePWAOptions } from "vite-plugin-pwa";

export const manifest: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    short_name: "PWA Cobee",
    name: "PWA Cobee: I want be a APP!",
    icons: [
      {
        src: "images/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "images/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "images/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "images/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#33676",
    background_color: "#3367D6",
    display: "fullscreen",
    start_url: "/",
    scope: "/",
    orientation: "portrait",
    description: "it's a POC",
  },
};
