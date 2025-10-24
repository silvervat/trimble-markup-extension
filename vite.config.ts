import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/trimble-markup-extension/',  // Repo nimega (sinu puhul "trimble-markup-ext") – see lahendab asset 404-d
  define: {
    global: 'globalThis',
  },
})
