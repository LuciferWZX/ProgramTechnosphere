import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  npmClient: 'pnpm',
  title: '技术分享圈',
  history: {
    type: 'hash',
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  favicons: ['/assets/png/favicon.png'],
  metas: [
    //如果要设置特定资源安全策略，要通过以下方式
    //{ "http-equiv": "Content-Security-Policy", content-header: "default-src 'self'" },
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      //'pathRewrite': { '^/api' : '' },
    },
  },
  //开启后，可通过 Option+Click/Alt+Click 点击组件跳转至编辑器源码位置，Option+Right-click/Alt+Right-click 可以打开上下文，查看父组件。
  clickToComponent: {},
  clientLoader: {},
  routes: routes,
  tailwindcss: {},
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
});
