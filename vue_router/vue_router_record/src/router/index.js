// 匯入 vue-router 資源
import { createRouter, createWebHashHistory } from 'vue-router';
// 匯入獨立元件
import Home from '../views/Home.vue';

// 路由表
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        // 子項目的路徑不用加上/
        path: 'a',
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue'),
      },
      // 參數 - 動態路由
      {
        path: 'dynamicrouter/:id',
        component: () => import('../views/DynamicRouter.vue'),
      },
      // 動態路由搭配 Props
      {
        path: 'dynamicrouterbyprops/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('route:', route);
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: 'routernavigation',
        component: () => import('../views/RouterNavigation.vue'),
      },
      // 具名視圖(命名視圖)
      {
        path: 'namedview',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            // 載入多個元件
            components: {
              // 命名視圖使用名稱就是物件所使用的名稱
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue'),
            },
          },
          {
            path: 'a2b',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue'),
            },
          },
        ],
      },
    ],
  },
];

// router 結構
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 匯出
export default router;
