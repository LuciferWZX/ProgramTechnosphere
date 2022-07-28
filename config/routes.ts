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
      {
        path: '/basic/create',
        component: '@/pages/create',
        routes:[
          { redirect: '/basic/create/article-home', path: '/basic/create' },
          {
            path: '/basic/create/article-home',
            component: '@/pages/create/article-home' ,
            wrappers:['@/wrappers/AuthorityWrapper'],
          },
          {
            path: '/basic/create/create-article',
            component: '@/pages/create/create-article',
            wrappers:['@/wrappers/AuthorityWrapper'],
          },
        ]
      },
      { path: '/basic/403', component: '@/pages/403' },
      { path: '*', component: '@/pages/404' },
    ],
  },
  { redirect: '/basic', path: '*' },
];
export default routes;
