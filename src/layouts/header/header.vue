<template>
  <header class="app-header">
    <div class="app-header-top">
      <div class="app-header-logo">
        <img src="./img/logo.svg" class="app-header-logo--img" alt="logo">
        <div class="app-header-logo--text">
          <p class="app-header-logo--name">胡兵兵</p>
          <p class="app-header-logo--des">UX&UI Designer</p>
        </div>
      </div>
      <div class="app-header-topnav">
        <router-link to="/" tag="span" :class="{'active': topNavAcive == 0}">工作</router-link>
        <router-link to="/cv" tag="span" :class="{'active': topNavAcive == 1}">简历</router-link>
      </div>
    </div>
    <transition>
      <div class="app-header-bottom">
        <ul class="app-header-bottomnav">
          <router-link v-for="(item, index) in nav" :to="item.link" :key="item.des" tag="li" class="app-header-bottomnav--item" :class="{'active': index == bottomNavAcitve}">
            <div>
              <i class="app-header-bottomnav--icon" :style="{'background-image': 'url(' + item.icon +')'}"></i>
              <span class="app-header-bottomnav--des">{{item.des}}</span>
            </div>
            <span class="app-header-bottomnav--total">{{item.total}}</span>
          </router-link>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
import contentTotal from 'data/contenttotal.json'
import sumIcon from './img/sum.svg'
import worksIcon from './img/works.svg'
import articlesIcon from './img/articles.svg'
import othersIcon from './img/others.svg'

export default {
  name: 'blogHeader',
  data() {
    return {
      nav: [
        {
          link: '/',
          des: '全部',
          total: contentTotal['sum'],
          icon: sumIcon
        },
        {
          link: '/works',
          des: '作品',
          total: contentTotal['works'],
          icon: worksIcon
        },
        {
          link: '/articles',
          des: '文章',
          total: contentTotal['articles'],
          icon: articlesIcon
        },
        {
          link: '/others',
          des: '其他',
          total: contentTotal['others'],
          icon: othersIcon
        }
      ],
      // 当前nav选中状态
      topNavAcive: -1,
      bottomNavAcitve: -1
    }
  },
  watch: {
    $route(to, from) {
      this.setNavActive(to.path)
    }
  },
  methods: {
    // 设置nav高亮状态
    setNavActive(path) {
      console.log(path)
      switch (path) {
        case '/':
          this.topNavAcive = 0
          this.bottomNavAcitve = 0
          break
        case '/works':
          this.topNavAcive = 0
          this.bottomNavAcitve = 1
          break
        case '/articles':
          this.topNavAcive = 0
          this.bottomNavAcitve = 2
          break
        case '/others':
          this.topNavAcive = 0
          this.bottomNavAcitve = 3
          break
        case '/cv':
          this.topNavAcive = 1
          this.bottomNavAcitve = -1
          break
        default:
          this.topNavAcive = -1
          this.bottomNavAcitve = -1
          break
      }
    }
  },
  mounted() {
    this.setNavActive(this.$route.path)
  }
}
</script>

<style lang="less">
@import url('./header.less');
</style>