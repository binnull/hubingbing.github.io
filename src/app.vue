<template>
  <div id="app">
    <blog-header :boxcolor="boxcolor"></blog-header>
    <router-view @changeBoxColor="changeBoxColor"></router-view>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import blogHeader from './layouts/header/header.vue'
import blogFooter from './layouts/footer/footer.vue'
export default {
  name: 'app',
  components: {
    blogHeader,
    blogFooter
  },
  data() {
    return {
      boxcolor: 'transparent'
    }
  },
  methods: {
    changeBoxColor(color) {
      this.boxcolor = color
    }
  }
}
</script>
<style lang="less">
@import url('./common/reset.less');
html,
body,
#app {
  width: 100%;
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}
#app {
  padding-top: 140px;
  padding-bottom: 64px;
}
</style>
