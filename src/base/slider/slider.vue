<template>
  <div class="slider" ref="slider">
    <!-- 轮播区域的 父容器 -->
    <div class="slider-group" ref="sliderGroup">
      <!-- 轮播图片放置 -->
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { addClass } from 'common/js/dom'
export default {
  name: '',
  mixins: [],
  components: {},
  props: {
    loop: { // 循环轮播
      type: Boolean,
      default: true
    },
    autoPlay: { // 自动轮播
      type: Boolean,
      default: true
    },
    interval: { // 轮播间隔时间
      type: Number,
      default: 4000
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    _setSliderWidth() {
      // 获取sliderGroup的所有子元素
      this.children = this.$refs.sliderGroup.children
      let width = 0 // 总宽度
      // 获取父容器的宽度
      let sliderWidth = this.$refs.slider.clientWidth
      // 循环 计算子元素的总宽度
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i] // 每一个子元素
        // 给child添加样式
        addClass(child, 'slider-item')
        child.style.width = `${sliderWidth}px`
        width += sliderWidth
      }
      // 如果this.loop = true, 前后会各加一张图片, 那么width, 也要加两张图片的宽度
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = `${width}px`
    },
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false, // 惯性
        snap: {
          loop: this.loop, // 循环
          threshold: 0.3,
          speed: 400 // 轮播间隔
        },
        click: true
      })
    }
  },
  filters: {},
  mounted () {
    setTimeout(() => {
      // 设置轮播图片的宽度
      this._setSliderWidth()
      // 初始化slider
      this._initSlider()
    }, 20)
  },
  created () { }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  .slider
    min-height 1px
    .slider-group
      position relative
      overflow hidden
      white-space nowrap
      .slider-item
        float left
        box-sizing border-box
        overflow hidden
        text-align center
        a
          display block
          width 100%
          overflow hidden
          text-direction none
          img
            display block
            width 100%
</style>
