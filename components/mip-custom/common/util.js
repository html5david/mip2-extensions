/**
 * @file 定制化有关dom操作的方法集
 * @author liujing
 */

/**
 * [spiderFilter 过滤spider的抓取]
 *
 * @param   {HTMLElement} elem 当前的element元素
 * @returns {boolean}          返回当前UA是否命中百度spider
 */
const spiderFilter = elem => {
  if (!elem) {
    return
  }
  return elem.querySelector('script[type="application/json"]')
}
export function getCookie (name) {
  const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) {
    return unescape(arr[2])
  } else {
    return ''
  }
}
export default {
  spiderFilter
}
