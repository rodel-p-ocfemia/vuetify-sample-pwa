import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Sample1 from '@/pages/Sample1'
import Sample2 from '@/pages/Sample2'
import Login from '@/pages/Login'
import Main from '@/pages/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Main,     
      children: [
        {
          path: '',
          name: 'HelloWorld 1',
          component: HelloWorld
        },
        {
          path: 'sample1',
          name: 'Sample1 1',
          component: Sample1
        },
        {
          path: 'sample2',
          name: 'Sample1 2',
          component: Sample2
        }
      ]
    }   
  ]
})
