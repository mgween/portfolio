import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Contact from '@/components/pages/Contact';

import Search from '@/components/pages/demos/Search';
import LiveUpdates from '@/components/pages/demos/LiveUpdates';
import Marketing from '@/components/pages/demos/Marketing';
import Api from '@/components/pages/demos/Api';
import Form from '@/components/pages/demos/Form';

import ComingSoon from '@/components/pages/ComingSoon';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/demo/search',
      component: Search
    },
    {
      path: '/demo/live',
      component: LiveUpdates
    },
    {
      path: '/demo/api',
      component: Api
    },
    {
      path: '/demo/marketing',
      component: ComingSoon
    },
    {
      path: '/demo/form',
      component: Form
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
