import list from './pages/list/list.vue'
import test from './pages/cv/cv.vue'
import article from './pages/article/article.vue'

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
  },
  {
    path: '/article/*',
    component: article
  }
]
