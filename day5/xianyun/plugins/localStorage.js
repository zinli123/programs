/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 16:08:21
 * @LastEditTime: 2019-09-04 16:20:22
 * @LastEditors: Please set LastEditors
 */
import createPersistedState from 'vuex-persistedstate'

 // export default 函数是nuxt插件的固定的格式
// 函数有一个参数，这个参数是nuxt对象
export default ( {store} ) => {
  // 插件的方法  
  window.onNuxtReady(() => {
    createPersistedState({
        key: 'store', // 可以是任意的字符串
    })(store)
  })
} 