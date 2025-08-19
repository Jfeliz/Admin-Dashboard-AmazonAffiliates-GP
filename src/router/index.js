import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';
import AdminLayout from '../components/AdminLayout.vue';
import Dashboard from '../views/Dashboard.vue';
import Config from '../views/Config.vue';
import AffiliateTags from '../views/AffiliateTags.vue';
import ApiKeys from '../views/ApiKeys.vue';
import Webhooks from '../views/Webhooks.vue';
import Commissions from '../views/Commissions.vue';
import Products from '../views/Products.vue';
import Redemptions from '../views/Redemptions.vue';
import { useAuthStore } from '../store/auth';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'Dashboard', component: Dashboard },
      { path: 'config', name: 'Config', component: Config },
      { path: 'affiliate-tags', name: 'AffiliateTags', component: AffiliateTags },
      { path: 'api-keys', name: 'ApiKeys', component: ApiKeys },
      { path: 'webhooks', name: 'Webhooks', component: Webhooks },
      { path: 'commissions', name: 'Commissions', component: Commissions },
      { path: 'products', name: 'Products', component: Products },
      { path: 'redemptions', name: 'Redemptions', component: Redemptions },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Comprobar token directamente en localStorage para asegurar redirección
  // incluso antes de que Pinia esté completamente inicializado en algunos flujos.
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
