import axios from 'axios'

/**
 * axios.create用于创建一个axios实例，该实例和axios的功能是一模一样的
 * 说白了就是克隆了一个axios
 * 为什么要这样做：我们可以拥有多个不同的请求函数，而他们的配置可能不一样的
 * 例如有些项目中可能会涉及到使用不同的接口路径
 *      http://toutiao.course.itcast.cn
 *      http://a.com
 *      http://b.com
 */

const request = axios.create({
  baseURL: 'http://toutiao.course.itcast.cn' // 这个地址是接口本地的
})
/**
 * Axios 请求拦截器：axios 发出去的请求会先经过这里
 * config 是本次请求相关的配置对象
 */
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
/**
 * Axios 响应拦截器：axios 收到的响应会先经过这里
 */
// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default request
