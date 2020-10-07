import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './components/App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(Buefy);
new Vue({
  render: h => h(App),
}).$mount('#app');
