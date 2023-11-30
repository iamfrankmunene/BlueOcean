import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://blueoceans.onrender.com",
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.jsx', 
      },
    },
    optimizeDeps: {
      include: ['src/main.jsx'],
    },
    target: 'modules',
  },
})
