import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import About from '@/components/About';
import Contact from '@/components/Contact';

import Search from '@/components/demos/Search';
import LiveUpdates from '@/components/demos/LiveUpdates';
import Marketing from '@/components/demos/Marketing';
import Api from '@/components/demos/Api';
import Form from '@/components/demos/Form';

import ComingSoon from '@/components/ComingSoon';

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
      component: ComingSoon
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
