import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import Home from '@/components/Home'
import Singleblog from '@/components/Singleblog'
import About from '@/components/About'
import Sub from '@/components/Sub'
import Comment from '@/components/Comment'
import Log from  '@/components/Log'
import Register from  '@/components/Register'
import Login from  '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path:'/blog/:id',
      name:'Singleblog',
      component:Singleblog
    },
    {
      path:'/About',
      name:'About',
      component:About
    },
    {
      path: '/Sub',
      name: 'Sub',
      component: Sub
    },
    {
      path: '/Comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/',
      name: 'Log',
      component: Log
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
  ]
  // mode :"history"
})
