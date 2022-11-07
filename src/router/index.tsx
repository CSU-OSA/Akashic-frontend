import { createRouter, createWebHistory } from 'vue-router'
import { Home } from "../views/Home";
import {PostPage} from "../views/PostPage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: <Home/>
    },
    {
      path: "/postpage",
      component: <postpage/>
    }
  ]
})

export default router
