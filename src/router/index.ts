import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ProduitView from "../views/ProduitView.vue";
// import ConnectionView from "../views/ConnectionViews.vue";
import InscribtionViews from "../views/InscribtionViews.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "Acceuil",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/produit",
    name: "produit",
    component: ProduitView,
  },
  // {
  //   path: "/connection",
  //   name: "connection",
  //   component: ConnectionView,
  // },
  {
    path: "/inscribtion",
    name: "inscribtion",
    component: InscribtionViews,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
