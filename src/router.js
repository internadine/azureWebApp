import Shopwindow from './views/Shopwindow.vue'
import {
  createWebHistory,
  createRouter
} from "vue-router";
import Home from "./components/Login.vue";
const history = createWebHistory();
const routes = [{
  path: "/",
  component: Home
},
{
  path: "/shopwindow",
  component: Shopwindow
}
];
const router = createRouter({
  history,
  routes
});
export default router;