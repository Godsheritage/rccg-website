import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import WindiCSS from 'vite-plugin-windicss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),WindiCSS()],
})
