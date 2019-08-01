/**
 * 操作dom的公共方法
 */

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

/**
 * @param {*} el DOM元素
 * @param {*} className 类名
 */
export function hasClass(el, className) {
  // 使用正则匹配 \\s: 空白字符
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}