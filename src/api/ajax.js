/**
 * ajax 请求函数模块
 */
import axios from 'axios'
import reqAddress from "./index"
export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    var myAxios = axios.create({
      baseURL: '/api'
    })
    let promise
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = myAxios.get(url)
    } else {
      // 发送 post 请求
      promise = myAxios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
