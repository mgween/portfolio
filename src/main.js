// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueChatScroll from 'vue-chat-scroll';
import moment from 'moment';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import {
  faArrowCircleRight,
  faEnvelope,
  faPencilAlt,
  faRocket,
  faPaintBrush,
  faPaperPlane,
  faComments
} from '@fortawesome/fontawesome-free-solid';

Vue.use(VueChatScroll);

Vue.filter('moment', (value) => {
  return moment(value).format('DD MMMM YYYY hh:mm a')
});

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
