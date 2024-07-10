/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import sassDts from 'vite-plugin-sass-dts'

export default defineConfig(() => ({
  plugins: [
    react(),
    dts({
      include: ['src/**/*.scss'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('.scss.d.ts', '.scss.d.ts'),
        content: content
      })
    }),
    sassDts()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_colors.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}))
