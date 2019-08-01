// 使用jsonp跨域拿到数据
import jsonp from 'common/js/jsonp'
// 引入common参数
import { commonParams, options } from './config'

export function getRecommend() { // 利用jsonp抓取推荐列表
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uni: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}