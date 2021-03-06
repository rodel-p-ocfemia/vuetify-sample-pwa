import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Dashboard from '@/pages/Dashboard'
import Attendance from '@/pages/Attendance'
import AttendanceWeekly from '@/pages/AttendanceWeekly'
import AttendanceMonthly from '@/pages/AttendanceMonthly'
//import Dashboard from '@/components/Clock2'
//import Dashboard from '@/components/Clock3'
import Sample1 from '@/pages/Sample1'
import Sample2 from '@/pages/Sample2'
import SampleSearch from '@/pages/SampleSearch'
import SampleGeoLocation from '@/pages/SampleGeoLocation'
import MyProfile from '@/pages/MyProfile'
import Login from '@/pages/Login'
import Main from '@/pages/Main'
import auth from '../auth'

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
          path: '/',
          name: 'Dashboard',
          component: Dashboard,
          beforeEnter: requireAuth
        },
        {
          path: 'attendance/daily',
          name: 'Attendance',
          component: Attendance,
          beforeEnter: requireAuth
        },
        {
          path: 'attendance/weekly',
          name: 'AttendanceWeekly',
          component: AttendanceWeekly,
          beforeEnter: requireAuth
        },
        {
          path: 'attendance/monthly',
          name: 'AttendanceMonthly',
          component: AttendanceMonthly,
          beforeEnter: requireAuth
        },
        {
          path: 'sample2',
          name: 'Sample1 2',
          component: Sample2,
          beforeEnter: requireAuth
        },
        {
          path: 'samplesearch',
          name: 'Sample Search',
          component: SampleSearch,
          beforeEnter: requireAuth
        },
        {
          path: 'samplegeolocation',
          name: 'Sample Geo Location',
          component: SampleGeoLocation,
          beforeEnter: requireAuth
        },
        {
          path: 'myprofile',
          name: 'MyProfile',
          component: MyProfile,
          beforeEnter: requireAuth
        },
        {
          path: 'logout',
          beforeEnter (to, from, next) {
            auth.logout()
            next('/Login')
          }
        }
      ]
    }   
  ]
});

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: 'Login',
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
