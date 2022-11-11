import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchResult from "../views/SearchResult.vue";
import Login from "../views/LoginView.vue";
import Logout from "@/views/LogoutView.vue";
import Upload from "../views/FileUploadView.vue";
import { PostPage } from "../views/PostPage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/search",
      component: SearchResult,
    },
    {
      path: "/login/:status",
      component: <Login />,
    },
    {
      path: "/logout",
      component: <Logout />,
    },
    {
      path: "/upload",
      component: <Upload />,
    },
    {
      path: "/postpage",
      component: <PostPage />,
    },
  ],
});

export default router;
