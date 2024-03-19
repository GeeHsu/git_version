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
