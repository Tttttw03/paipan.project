import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // 新增：引入 tailwindcss 插件

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/paipan.project/', // 新增：GitHub Pages 部署路径
      server: {
        port: 5173,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        tailwindcss(),
      ],
      css: {
        transformer: 'lightningcss',
      },
      build: {
        outDir: 'docs',
        cssMinify: 'lightningcss',
        rollupOptions: {
          output: {
            manualChunks: undefined,
          }
        }
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
