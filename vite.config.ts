import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // 新增：引入 tailwindcss 插件

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/paipan.com/', // 新增：GitHub Pages 部署路径
      server: {
        port: 5173,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        tailwindcss(), // 新增：使用 tailwindcss 插件
      ],
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
