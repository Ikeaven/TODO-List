import { createRouter, createWebHistory } from 'vue-router'
import AllTodoListView from '../views/AllTodoListView.vue'
import PercentageView from '../views/PercentageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all-todo-list',
      component: AllTodoListView
    },
    {
      path: '/pourcentage',
      name: 'pourcentage',
      component: PercentageView
    }
  ]
})

export default router
