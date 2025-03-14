import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { start, close } from '@/utils/nprogress';
import { LOGIN_PATH } from '@/helper';
import { getToken } from '@/utils';
import { isDevFn } from '../../build/utils';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index/index.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

const whiteList = [LOGIN_PATH];

router.beforeEach((to, from, next) => {
  start();
  document.title = '驾驶舱';
  if (!getToken() && !whiteList.includes(to.path)) {
    if (isDevFn(import.meta.env.MODE)) {
      setTimeout(() => {
        next(LOGIN_PATH);
      });
    } else {
      next(LOGIN_PATH);
    }
  } else {
    setTimeout(() => {
      next();
    });
  }
});
router.afterEach(() => {
  setTimeout(() => {
    close();
  }, 1000);
});
export default router;
