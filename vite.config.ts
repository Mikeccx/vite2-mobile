import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
    // urlbase
    base: '/vite',
    build: {
        // 构建打包后的文件名
        outDir: 'web'
    },
    // 服务器相关
    server: {
        // 服务端口
        port: 9999,
        //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
        strictPort: true,
        // 开发跨域配置
        proxy: {
            '/api': {
                target: 'xxxxx.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },
    // 插件
    plugins: [
        vue(),
        eslintPlugin(),
        styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style`,
          },
        ],
      })
    ],
})
