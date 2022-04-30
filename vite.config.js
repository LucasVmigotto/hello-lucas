/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production'
    ? '/hello-lucas-prod/'
    : '/'
})
