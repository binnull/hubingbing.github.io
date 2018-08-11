import list from './pages/list/list.vue'
import test from './pages/test/test.md'

export default [
  {
    path: '/',
    component: list
  },
  {
    path: '/works',
    component: list
  },
  {
    path: '/articles',
    component: list
  },
  {
    path: '/others',
    component: list
  },
  {
    path: '/cv',
    component: test
  }
]
