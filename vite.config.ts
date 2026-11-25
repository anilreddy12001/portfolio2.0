import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env from current directory (portfolio2.0) as well as parent directory
  const envLocal = loadEnv(mode, process.cwd(), '');
  const envParent = loadEnv(mode, path.resolve(process.cwd(), '..'), '');

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    // Expose VITE_ variables whether defined in portfolio2.0/.env or parent ../.env
    envDir: process.cwd(),
    define: {
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(
        envLocal.VITE_GEMINI_API_KEY || envParent.VITE_GEMINI_API_KEY || ''
      ),
    },
  };
});
