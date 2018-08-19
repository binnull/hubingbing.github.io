<template>
  <section class="articlepage">
    <router-link class="articlepage-gobackbtn" to="/" tag="div"></router-link>
    <div class="articlepage-left">
      <section class="articlepage-left-wrap">
        <router-view></router-view>
      </section>
    </div>
    <div class="articlepage-right">
      <section class="articlepage-right-wrap">
        <ul class="articlepage-right-content">
          <li class="articlepage-right-li">
            <div class="articlepage-right-li--top">
              <p class="articlepage-right-li--btn">上一篇</p>             
              <p class="articlepage-right-li--time">2017-11-24</p>             
              <div class="articlepage-right-li--des">文章标题如果标题太长太长，可以这样显示，不能超过这里…</div>             
            </div>
            <div class="articlepage-right-li--bottom">
              <div class="articlepage-right-li--more"><span>作品 ·</span> 设计思维 / 设计方法 / UX / Wap</div>
              <div class="articlepage-right-li--triangleb"></div>
              <div class="articlepage-right-li--triangles"></div>
            </div>
          </li>
          <li class="articlepage-right-li">
            <div class="articlepage-right-li--top">
              <p class="articlepage-right-li--btn">下一篇</p>             
              <p class="articlepage-right-li--time">2017-11-24</p>             
              <div class="articlepage-right-li--des">文章标题如果标题太长太长，可以这样显示，不能超过这里…</div>             
            </div>
            <div class="articlepage-right-li--bottom">
              <div class="articlepage-right-li--more"><span>作品 ·</span> 设计思维 / 设计方法 / UX / Wap</div>
              <div class="articlepage-right-li--triangleb"></div>
              <div class="articlepage-right-li--triangles"></div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style lang="less">
@import url('./article.less');
</style>
