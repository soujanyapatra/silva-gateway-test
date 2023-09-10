import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import quickPay from '../views/quick-pay.vue'
import routes from "~pages";
import payment from '../components/payment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/quick-pay',
      name: 'quick-pay',
      component: quickPay,
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment,
    },
    {
      path: '/',
      name: 'home',
      component: quickPay,
    },
  ...setupLayouts(routes)],
});

router.beforeEach(async (to, from) => {
});

export default router;
