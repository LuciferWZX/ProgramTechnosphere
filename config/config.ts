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
  clientLoader: {},
  routes: routes,
  tailwindcss: {},
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
});
