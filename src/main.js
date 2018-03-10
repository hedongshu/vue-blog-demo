// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 结合vue-axios 可以让axios全局使用
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../static/css/index.css'
Vue.use(VueAxios,axios)

Vue.config.productionTip = false
/* eslint-disable no-new */
axios.defaults.baseURL = 'https://wd7064425154easwbq.wilddogio.com/';

new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
