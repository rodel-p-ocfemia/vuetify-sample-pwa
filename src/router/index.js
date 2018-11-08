import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sample1 from '@/components/Sample1'
import Sample2 from '@/components/Sample2'
import Landing from '@/components/Landing'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Landing',
      name: 'Landing',
      component: Landing
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
