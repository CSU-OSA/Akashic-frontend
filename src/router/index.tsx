import { createRouter, createWebHistory } from "vue-router";
import { Home } from "@/views/Home";
import { SearchResult } from "@/views/SearchResult";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/search",
      component: <SearchResult />,
    },
  ],
});

export default router;
