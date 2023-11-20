import { App } from "vue";
import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  RouteRecordRaw,
} from "vue-router";

import Home from "@/views/Home.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "确认合同",
    meta: {
      title: "确认合同",
    },
    component: Home
  }
];

/* 创建路由 */
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
  scrollBehavior(
    to: RouteLocationNormalized,
    _from: RouteLocationNormalizedLoaded,
    savedPosition
  ) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

/* App挂载路由 */
export const setupRouter = (app: App<Element>): void => {
  app.use(router);
};
