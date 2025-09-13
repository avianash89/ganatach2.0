import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true, // Allow external connections
    allowedHosts: [
      'localhost',
      'https://fd836777bf03.ngrok-free.app/', // Your specific ngrok URL
      '.ngrok-free.app' // Or allow all ngrok-free.app subdomains

    ] // Allow all hosts
  }
})
