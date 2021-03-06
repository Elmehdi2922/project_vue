import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
//------------------------------- Payment Routes ------------------------------------- 
import Payments from "../views/payment/admin/Payments.vue";
import GiftCards from "../views/payment/admin/GiftCards.vue";
import Paypal from "../views/payment/admin/Paypal.vue";
import AddGiftCard from "../views/payment/admin/AddGiftCard.vue";
import AddPaypal from "../views/payment/admin/AddPaypal.vue";
import updateGiftCard from "../views/payment/admin/updateGiftCard.vue";
import updatePaypal from "../views/payment/admin/updatePaypal.vue";
import makePayment from "../views/payment/website/makePayment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/makePayment",
    name: "makePayment",
    component: makePayment
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
    path: "/admin/payments/paypal",
    name: "Paypal",
    component: Paypal
  },
  {
    path: "/admin/payments/giftcards/add",
    name: "AddGiftCard",
    component: AddGiftCard
  },
  {
    path: "/admin/payments/paypal/add",
    name: "AddPaypal",
    component: AddPaypal
  },
  {
    path: "/admin/payments/giftcards/update/:id",
    name: "updateGiftCard",
    component: updateGiftCard
  },
  {
    path: "/admin/payments/paypal/update/:id",
    name: "updatePaypal",
    component: updatePaypal
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
