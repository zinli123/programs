/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 09:39:43
 * @LastEditTime: 2019-09-05 09:51:55
 * @LastEditors: Please set LastEditors
 */
import {Message} from "element-ui"
export default  ({$axios})=> {
    console.log($axios)
    // 错误拦截
    $axios.onError(res=>{
        // 返回的res是一个错误的对象,Error对象下都有一个response的属性可以访问错误的信息
        console.log(res.response,123)

        // 结构出错误信息和代码
        const {message,statusCode}=res.response.data;
        if(statusCode===400){
            Message.error(message)
        }
    })
}