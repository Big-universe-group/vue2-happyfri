// 导入Vue
import Vue from 'vue';
// 导入VueRouter模块: https://router.vuejs.org/zh-cn/installation.html
import VueRouter from 'vue-router';
// 导入自定义路由, default作为routers变量
import routes from './router/router';
import store from './store/';
import ajax from './config/ajax';
import './style/common';
import './config/rem';

Vue.use(VueRouter);
const router = new VueRouter({
	routes
});

new Vue({
	router,
	store,
}).$mount('#app');
