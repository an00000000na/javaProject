import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Word from '../views/Word.vue'
import Card from '../views/Card'
import Base from '../views/Base'
import NewWord from '../views/NewWord'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/word',
    name: 'Word',
    component: Word
  },
  {
    path: '/new',
    name: 'New',
    component: NewWord
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/base',
    name: 'Base',
    component: Base
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  }
]

const router = new VueRouter({
  routes
})

export default router
