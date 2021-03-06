// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import FastClick from 'fastclick'
FastClick.attach(document.body);

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import Vue from 'vue'
import App from './App'
import router from './router'

import moment from 'moment'
moment.locale('zh-cn');
Vue.prototype.$moment = moment;


import 'lib-flexible'

Vue.config.productionTip = false;

import Api from './api/index.js';
Vue.prototype.$api = Api;

import Ces from './components/ces/ces.js'
import Config from './config.js'
Ces.Config = Ces.Utils.extend(Ces.Config, Config);
Vue.$ces = Vue.prototype.$ces = Ces;
Vue.prototype.$mint = Mint;

import VueScroller from './components/vue-scroller/index.js'
Vue.use(VueScroller)

import Dragbtn from './components/dragbtn/index.js'

Vue.use(Dragbtn)

import store from './store/'

// 路由列表
/*import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);*/

Ces.ready(function () {
  /* eslint-disable no-new */
  new Vue({
    router,
    store,
    components: { App },
    template: '<App/>'
  }).$mount('#app');

});

