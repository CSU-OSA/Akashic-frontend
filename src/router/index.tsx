import { createRouter, createWebHistory } from "vue-router";
import { Home } from "../views/Home";
import PostPage from "../views/PostPage.vue";
import HomeView from "../views/HomeView.vue";
import SearchResult from "../views/SearchResult.vue";
import Login from "../views/LoginView.vue";
import Logout from "@/views/LogoutView.vue";
import Upload from "../views/FileUploadView.vue";
import { PostPage } from "@/views/PostPage";
import PersonalInfoView from "../views/PersonalInfoView.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
      component: Login,
    },
    {
      path: "/logout",
      component: <Logout />,
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
    {
      path: "/PostPage",
      component: PostPage,
    },
  ],
});

export default router;
