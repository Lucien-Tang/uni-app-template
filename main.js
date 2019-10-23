import Vue from 'vue'
import App from './App'
import store from './store'
import $http from './common/http.js'
import $utils from './common/utils.js'

Vue.config.productionTip = false
Vue.prototype.$http = $http;
Vue.prototype.$utils = $utils;

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
