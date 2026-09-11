import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/micro-loan-library/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Micro-Loan Tool-Library Directory',
        short_name: 'Tool Libraries',
        description: 'Neighborhood tool libraries, share-spaces and tool co-ops',
        theme_color: '#0f172a',
        background_color: '#020617',
        display: 'standalone',
        start_url: '/micro-loan-library/',
        scope: '/micro-loan-library/',
        icons: [
          { src: '/micro-loan-library/icon.svg', sizes: '512x512', type: 'image/svg+xml' }
        ]
      },
      workbox: {
        navigateFallback: '/micro-loan-library/index.html',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/picsum\.photos\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'images', expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 } }
          }
        ]
      }
    })
  ],
})
