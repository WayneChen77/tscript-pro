import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: () => import('../views/RoomsView.vue'),
  },
  {
    path: '/roomdetail',
    name: 'roomdetail',
    component: () => import('../views/RoomDetailView.vue'),
  },
  {
    path: '/bookroom',
    name: 'bookroom',
    component: () => import('../views/BookroomView.vue'),
  },
  {
    path: '/checkroom',
    name: 'checkroom',
    component: () => import('../views/CheckroomView.vue'),
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('../views/MemberView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
