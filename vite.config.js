import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/main.jsx', 
      output: {
        format: 'es', // Set the format to 'es' for JavaScript modules
      },
    },
  },
})
