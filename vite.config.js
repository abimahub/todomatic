import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon,png', 'mask-icon.svg'],
      manifest: {
        name: 'todomatic',
        short_name: 'todo',
        description: 'todo',
        theme_color: '#fffffff',
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: 'any maskable'
          }
        ]
      }
      //registerType: "autoUpdate",
      //workbox: {
      //  clientsClaim: true,
     //   skipWaiting: true,
     // },
     // devOptions: {
      //  enabled: true,
     // },
    }),
  ],
});
