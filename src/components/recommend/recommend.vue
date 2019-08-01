<template>
  <div class="recommend" ref="recommend">
    <!-- 轮播图组件 -->
    <div v-if="recommends.length > 0" class="slider-wrapper">
      <slider>
        <div v-for="item in recommends" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
    <!-- 推荐列表 -->
    <div class="recommend-list"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'

export default {
  name: 'Recommend',
  mixins: [],
  components: {
    Slider
  },
  props: {},
  data () {
    return {
      recommends: [] // 轮播图数据
    }
  },
  computed: {},
  watch: {},
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    }
  },
  filters: {},
  mounted () { },
  created () {
    // 获取推荐歌单
    this._getRecommend()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
