import { createRouter, createWebHistory } from 'vue-router'
import PersonalView from '../views/PersonalView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import AppreciationView from '../views/AppreciationView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'
import ShowView from '../views/ShowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: PersonalView
    },
    {
      path: '/about-me',
      name: 'about',
      component: AboutView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/appreciation',
      name: 'appreciation',
      component: AppreciationView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/project/:id',
      name: 'show_project',
      component: ShowView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
