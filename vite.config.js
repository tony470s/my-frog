import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';

const pathSrc = path.resolve(__dirname, 'src');
export default defineConfig({
  build: {
    sourcemap: true,
  },
  server: {
    port: 3320,
    proxy: {
      '/91porny-proxy': {
        target: 'https://0ksy5j.jiuse710.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/91porny-proxy/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
      dts: path.resolve(pathSrc, 'plugins', 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: path.resolve(pathSrc, 'plugins', 'components.d.ts'),
    }),
  ],
});
