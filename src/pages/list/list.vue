<template>
  <section class="listpage">
    <div class="listpage-left">
      <section class="listpage-left-wrap">
        <ul class="listpage-left-content">
          <li v-for="item in listData" :key="item" class="listpage-left-li">
            <p class="listpage-left-li--time">034&nbsp;2017-11-24</p>
            <h3 class="listpage-left-li--title">15个简单的习惯将帮助你成为更好的UX设计师</h3>
            <p class="listpage-left-li--tag">设计思维 / UX / UI</p>
          </li>
        </ul>
        <p class="listpage-left-end">
          <span class="listpage-left-end--text">已经没有内容了了哦~</span>
          <span class="listpage-left-end--gotop">返回顶部↑</span>
        </p>
      </section>
    </div>
    <div class="listpage-right">
      <section class="listpage-right-wrap">
        <h2 class="listpage-right-title">设计思维&设计方法</h2>
        <ul class="listpage-right-content">
          <li v-for="(item, index) in listData2" :key="index" class="listpage-right-li">
            <div class="listpage-right-li--top">
              <div class="listpage-right-li--header">
                <div class="listpage-right-li--logo">
                  <img src="/image/1.png">
                </div>
                <div class="listpage-right-li--title">
                  <p class="listpage-right-li--titlet">批判性思维</p>
                  <p class="listpage-right-li--titled">Critical Thinking</p>
                </div>
                <div class="listpage-right-li--br"></div>
              </div>
              <div class="listpage-right-li--content">
                通过一定的标准评价思维，进而改善思维，是合理的、反思性的思维，既是思维技能，也是思维倾向。
              </div>
            </div>
            <div class="listpage-right-li--bottom">
              <div class="listpage-right-li--more">了解更多 →</div>
              <div class="listpage-right-li--triangle"></div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      listData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      listData2: [
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        },
        {
          color: 'rgba(22, 43, 214, 0.4)'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import url('./list.less');
</style>

