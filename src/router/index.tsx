import { createRouter, createWebHistory } from "vue-router";
import { SearchResult } from "@/views/SearchResult";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/search",
      component: <SearchResult />,
    },
  ],
});

export default router;
