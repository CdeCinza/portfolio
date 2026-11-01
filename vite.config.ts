import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Carimbo do build, como um filemtime: entra no nome do CSS e do JS para cada deploy gerar
// arquivos novos e nenhum navegador ficar preso a uma versão antiga em cache.
const buildId = Date.now().toString(36)

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name]-[hash]-${buildId}.js`,
            chunkFileNames: `assets/[name]-[hash]-${buildId}.js`,
            assetFileNames: `assets/[name]-[hash]-${buildId}[extname]`,
          },
        },
      },
}))
