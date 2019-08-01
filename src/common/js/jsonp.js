import originJSONP from 'jsonp'

/**
 * @param {string} url 传入的路径
 * @param {object} data 传入的参数
 * @param {object} option 传入的其他设置
 */
export default function jsonp(url, data, option) {
  // 判断url是否有?
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

/**
 * 将data拼接到url上
 * @data: 参数
 */
function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}