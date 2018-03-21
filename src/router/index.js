import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Search from '@/components/demos/Search';
import LiveUpdates from '@/components/demos/LiveUpdates';
import Marketing from '@/components/demos/Marketing';
import Api from '@/components/demos/Api';
import ComingSoon from '@/components/ComingSoon';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/coming-soon',
      name: 'ComingSoon',
      component: ComingSoon
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: 'live',
      alias: '/demo/live',
      name: 'LiveUpdates',
      component: LiveUpdates
    },
    {
      path: '/api',
      component: Api
    },
    {
      path: '/marketing',
      component: Marketing
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
