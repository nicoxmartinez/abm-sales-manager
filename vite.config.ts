import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
      '@layouts': path.resolve(import.meta.dirname, './src/layouts'),
      '@models': path.resolve(import.meta.dirname, './src/models'),
      '@services': path.resolve(import.meta.dirname, './src/services'),
      '@screens': path.resolve(import.meta.dirname, './src/screens'),
      '@styles': path.resolve(import.meta.dirname, './src/styles'),
    },
  },
})
