import { createRouter, createWebHashHistory } from "vue-router";
import PostPage from "@/views/PostPage.vue";
import HomeView from "@/views/HomeView.vue";
import SearchResult from "@/views/SearchResult.vue";
import Login from "@/views/LoginView.vue";
import Logout from "@/views/LogoutView.vue";
import Upload from "@/views/FileUploadView.vue";
import PersonalInfoView from "@/views/PersonalInfoView.vue";
import WelcomeView from "@/views/WelcomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/welcome",
      component: WelcomeView,
    },
    {
      path: "/postpage",
      component: PostPage,
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
    {
      path: "/wiki",
      redirect: (router)=>window.location.href = "http://csu-cs-wiki.itryagain.cn/",
    },
  ],
});

export default router;
