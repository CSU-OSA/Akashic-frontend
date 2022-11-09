import { createRouter, createWebHistory } from "vue-router";
import { Home } from "../views/Home";
import Login from "../views/LoginView.vue";
import Upload from "../views/FileUploadView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/login",
      component: <Login />,
    },
    {
      path: "/upload",
      component: <Upload />,
    },
  ],
});

export default router;
