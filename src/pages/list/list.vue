<template>
  <section class="listpage">
    <div class="listpage-left">
      <section class="listpage-left-wrap" @scroll="scrollEvent">
        <ul class="listpage-left-content" ref="listpageleftcontent">
          <router-link v-for="item in listData" :key="item" class="listpage-left-li" tag="li" to="/article/15">
            <p class="listpage-left-li--time">034&nbsp;2017-11-24</p>
            <h3 class="listpage-left-li--title">15个简单的习惯将帮助你成为更好的UX设计师</h3>
            <p class="listpage-left-li--tag">设计思维 / UX / UI</p>
          </router-link>
        </ul>
        <p class="listpage-left-end">
          <span class="listpage-left-end--text">已经没有内容了哦~</span>
          <span class="listpage-left-end--gotop">返回顶部↑</span>
        </p>
      </section>
    </div>
    <div class="listpage-right">
      <section class="listpage-right-wrap" @scroll="scrollRightEvent">
        <h2 class="listpage-right-title" ref="listpagerighth2">设计思维&设计方法</h2>
        <ul class="listpage-right-content">
          <router-link  v-for="(item, index) in listData2" :key="index" class="listpage-right-li" tag="li" to="/article/15">
            <div @mouseenter="enterColor(index)" @mouseleave="leaveColor(index)">
              <div class="listpage-right-li--top" ref="litop">
                <div class="listpage-right-li--header">
                  <div class="listpage-right-li--logo">
                    <img src="/image/1.png">
                  </div>
                  <div class="listpage-right-li--title">
                    <p class="listpage-right-li--titlet">批判性思维</p>
                    <p class="listpage-right-li--titled">Critical Thinking</p>
                  </div>
                  <div class="listpage-right-li--br" ref="libr"></div>
                </div>
                <div class="listpage-right-li--content">
                  通过一定的标准评价思维，进而改善思维，是合理的、反思性的思维，既是思维技能，也是思维倾向。
                </div>
              </div>
              <div class="listpage-right-li--bottom">
                <div class="listpage-right-li--more" ref="limore">了解更多 →</div>
                <div class="listpage-right-li--triangleb" ref="lib"></div>
                <div class="listpage-right-li--triangles" ref="lis"></div>
              </div>
            </div>
          </router-link>
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
          color: 'FF0000'
        },
        {
          color: '00FF00'
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
  },
  methods: {
    enterColor(index) {
      let color = this.listData2[index].color || '#000000'

      let litop = this.$refs.litop[index]
      litop.style['border-top'] = '2px solid #' + color
      litop.style['border-left'] = '2px solid #' + color
      litop.style['border-right'] = '2px solid #' + color

      // let libr = this.$refs.libr[index]
      // libr.style['background-color'] = '#' + color

      let limore = this.$refs.limore[index]
      limore.style['border-left'] = '2px solid #' + color
      limore.style['border-bottom'] = '2px solid #' + color

      let lib = this.$refs.lib[index]
      lib.style['border-bottom'] = '21px solid #' + color
    },
    leaveColor(index) {
      let litop = this.$refs.litop[index]
      litop.style['border-top'] = '2px solid #e0e0e0'
      litop.style['border-left'] = '2px solid #e0e0e0'
      litop.style['border-right'] = '2px solid #e0e0e0'

      // let libr = this.$refs.libr[index]
      // libr.style['background-color'] = '#000000'

      let limore = this.$refs.limore[index]
      limore.style['border-left'] = '2px solid #e0e0e0'
      limore.style['border-bottom'] = '2px solid #e0e0e0'

      let lib = this.$refs.lib[index]
      lib.style['border-bottom'] = '21px solid #e0e0e0'
    },
    scrollEvent(eve) {
      let top = this.$refs.listpageleftcontent.getBoundingClientRect().top
      let color
      if (top < 100) {
        color = 'rgba(22, 43, 214, 0.4)'
      } else {
        color = 'transparent'
        if (this.$refs.listpagerighth2.getBoundingClientRect().top < 140) {
          color = 'rgba(22, 43, 214, 0.4)'
        }
      }

      this.$emit('changeBoxColor', color)
    },
    scrollRightEvent(eve) {
      let top = this.$refs.listpagerighth2.getBoundingClientRect().top
      let color
      if (top < 140) {
        color = 'rgba(22, 43, 214, 0.4)'
      } else {
        color = 'transparent'
        if (this.$refs.listpageleftcontent.getBoundingClientRect().top < 100) {
          color = 'rgba(22, 43, 214, 0.4)'
        }
      }

      this.$emit('changeBoxColor', color)
    }
  }
}
</script>

<style lang="less">
@import url('./list.less');
</style>

