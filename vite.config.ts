import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Absolute base for og:image / twitter:image in index.html (social crawlers need full URLs).
// Production default is the real domain; a preview build can set OG_BASE_URL to its own host.
const ogBaseUrl = (process.env.OG_BASE_URL ?? 'https://glitchsociety.dev').replace(/\/$/, '')

const ogBase = (): Plugin => ({
  name: 'og-base-url',
  transformIndexHtml: (html) => html.replaceAll('%OG_BASE_URL%', ogBaseUrl),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ogBase()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
