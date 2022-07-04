const routes: any[] = [
  { redirect: '/basic', path: '/' },
  {
    path: '/entry',
    component: '@/layouts/entry',
    routes: [
      { redirect: '/entry/login', path: '/entry' },
      { path: '/entry/login', component: '@/pages/login' },
    ],
  },
  {
    path: '/basic',
    component: '@/layouts/basic',
    routes: [
      { redirect: '/basic/home', path: '/basic' },
      { path: '/basic/home', component: '@/pages/home' },
      {
        path: '/basic/micro-apps',
        component: '@/pages/micro-apps',
        // routes:[
        //   { path: '/basic/micro-apps', component: '@/pages/home' },
        // ]
      },
      { path: '/basic/setting', component: '@/pages/setting' },
      { path: '/basic/create', component: '@/pages/create' },
      { path: '*', component: '@/pages/404' },
    ],
  },
  { redirect: '/basic', path: '*' },
];
export default routes;
