import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'pwa-512x512.png', 'pwa-192x192.png'],
      manifest: {
        id: "/",
        name: 'VTBHAHAton',
        short_name: 'VTBHAHAton',
        description: 'HAHAton blelele',
        background_color: '#00ffff',
        theme_color: '#ff00ff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          // {
          //   urlPattern: /^https:\/\/(cdn.7tv.app|cdn.frankerfacez.com|static-cdn.jtvnw.net)\/(emot|badge).*/i,
          //   handler: 'CacheFirst',
          //   options: {
          //     cacheName: 'emotes-badges-v2',
          //     expiration: {
          //       maxEntries: 5000,
          //       maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
          //     },
          //     cacheableResponse: {
          //       statuses: [0, 200]
          //     }
          //   }
          // }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
