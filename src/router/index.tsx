import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchResult from "../views/SearchResult.vue";
import Login from "../views/LoginView.vue";
import Upload from "../views/FileUploadView.vue";
import { PostPage } from "@/views/PostPage";
import PersonalInfoView from "../views/PersonalInfoView.vue";

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
      path: "/login",
      component: Login,
    },
    {
      path: "/upload",
      component: Upload,
    },
    {
      path: "/postpage",
      component: <PostPage />,
    },
    {
      path: "/personal",
      component: PersonalInfoView,
    },
  ],
});

export default router;
