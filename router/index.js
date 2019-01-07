import Vue from 'vue'
import Router from 'vue-router'
import Janken from '@/components/JankenComp'
import Scores from '@/components/ScoresComp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/janken',
      name: 'Janken',
      component: Janken
    },
    {
      path: '/scores',
      name: 'Scores',
      component: Scores
    },
    {
      path: '*',
      redirect: '/janken'
    }
  ]
})
