import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Payments from "../views/Payments.vue";
import GiftCards from "../views/GiftCards.vue";
import AddGiftCard from "../views/AddGiftCard.vue";
import updateGiftCard from "../views/updateGiftCard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/admin/payments",
    name: "Payments",
    component: Payments
  },
  {
    path: "/admin/payments/giftcards",
    name: "GiftCards",
    component: GiftCards
  },
  {
    path: "/admin/payments/giftcards/add",
    name: "AddGiftCard",
    component: AddGiftCard
  },
  {
    path: "/admin/payments/giftcards/update/:id",
    name: "updateGiftCard",
    component: updateGiftCard
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
