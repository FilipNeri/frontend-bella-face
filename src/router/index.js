// router.js

import Cart from '@/pages/Cart.vue';
import Login from '@/pages/Login.vue';
import Products from '@/pages/Products.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/',
      component: Login,
    },
    {
      path: '/products',
      component: Products
    }
  ]
});

export default router;
