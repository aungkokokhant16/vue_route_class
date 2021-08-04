import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetail from '../views/Jobs/JobDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobDetail/:id',
    name: 'JobDetail',
    component: JobDetail,
    props: true,
  },
  //redirect
  {
    path:'/all-jobs',
    redirect:'/jobs',
  },
  //catchall
  {
    path:'/:catchAll(.*)',
    component:NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
