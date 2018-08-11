<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import blogHeader from './layouts/header/header.vue'
export default {
  name: 'app',
  components: {
    blogHeader
  },
  data() {
    return {}
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
  min-height: 100%;
}
</style>
