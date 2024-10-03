import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import store from '../store/store';
import AddBookView from '@/views/AddBookView.vue';
import GetBookCountView from '@/views/GetBookCountView.vue';
import WeatherView from '@/views/WeatherView.vue';
import CountBookAPI from '@/views/CountBookAPI.vue';
import AllBookAPI from '@/views/AllBookAPI.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/addbook',
    name: 'Addbook',
    component: AddBookView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/Weather',
    name: 'Weather',
    component: WeatherView
  },
  {
    path:'/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path:'/AllBookAPI',
    name:'AllBookAPI',
    component: AllBookAPI
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(!store.state.isAuthenticated && to.name !== 'Login') {
    return ({name: 'Login'});
  } else {
    next();
  }
}
)

export default router