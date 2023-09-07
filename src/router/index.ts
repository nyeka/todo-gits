import { createRouter, createWebHistory } from "vue-router";
import HomeTodo from "../views/todo/HomeTodo.vue";
import HomeView from "../views/landingPage/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/todo",
      name: "todo",
      component: HomeTodo,
    },
    {
      path: "/todo/about",
      name: "about",
      component: () => import("../views/todo/About.vue"),
    },
    {
      path: "/todo/app",
      name: "app",
      component: () => import("../views/todo/Todo.vue"),
    },
  ],
});

export default router;
