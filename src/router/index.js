import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Compare from '../views/Compare.vue';
import RamDetail from '../views/RamDetail.vue';

const routes = 
[
  { path: '/', name: 'Home', component: Home },
  { path: '/search', name: 'Search', component: Search },
  { path: '/compare', name: 'Compare', component: Compare },
  { path: '/ram/:id', name: 'RamDetail', component: RamDetail }
];

const router = createRouter(
  {
  history: createWebHistory(process.env.BASE_URL),
  routes
  });

export default router;