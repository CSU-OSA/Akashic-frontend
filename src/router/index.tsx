import { createRouter, createWebHistory } from "vue-router";
import { Home } from "../views/Home";
import PostPage from "../views/PostPage.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/PostPage",
      component: PostPage,
    },
  ],
});

export default router;
