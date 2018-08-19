import list from './pages/list/list.vue'
import article from './pages/article/article.vue'
import cv from './pages/cv/cv.vue'
import test from './blogs/articles/15个简单的习惯将帮助你成为更好的UX设计师/index.vue'

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
    component: cv
  },
  {
    path: '/article/',
    component: article,
    children: [
      {
        path: '15',
        component: test
      }
    ]
  }
]
