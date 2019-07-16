// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from  './store'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(ElementUI)

AV.init({
  appId:'ebBQLn19n1v1z3n7W72S9jRV-9Nh9j0Va',
  appKey:'2mEMtePytHFDYRxHBsSBdEFm'
})

// var TestObject = AV.Object.extend('Song');
// //创建一条记录
// var testObject = new TestObject();
// //保存记录
// testObject.save({
//   name: 'test',
//   singer: 'test',
//   url: 'test'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
})

