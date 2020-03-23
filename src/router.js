import Vue from "vue";
import VueRouter from "vue-router";
import { routes as games } from "@/modules/games";

Vue.use(VueRouter);

const routes = [...games];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
