import { createRouter, createWebHistory } from "vue-router";
import { Home } from "../views/Home";
import Login from "../views/LoginView.vue";

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
  ],
});

export default router;
