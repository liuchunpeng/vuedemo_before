import axios from 'axios'
//创建axios实例（'/api'会替换成跨域配置里的target）
export var myAxios = axios.create({
  timeout: 5000,
  baseURL: '/api'
})

