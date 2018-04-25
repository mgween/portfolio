// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueChatScroll from 'vue-chat-scroll';
import moment from 'moment';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

Vue.use(VueChatScroll);

Vue.prototype.$moment = moment;

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

router.afterEach((to, from) => {
  window.scrollTo(0 , 0);
});

Vue.mixin({
  data() {
    return {
      server: location.host === 'localhost:8081' ? 'http://localhost:2626' : '',
      palette: [
        '#ffb3ba',
        '#ffdfba',
        '#ffffba',
        '#baffc9',
        '#bae1ff',
        '#b19cd9'
      ]
    }
  },
  methods: {
    shuffleArray(array) { // Source: https://stackoverflow.com/a/12646864
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      };
    },
    inputColorizer(index) {
      return { background: `linear-gradient(to right, #c9c9c9 50%, ${this.palette[index]} 50%)` };
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
