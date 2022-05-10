import axios from 'axios'

const request = axios.create()

// 请求拦截器
request.interceptors.request.use(config => {
  console.log('请求拦截器1')
  return config
}, error => {
  console.log('请求拦截器1，reject')
  return Promise.reject(error)
})
request.interceptors.request.use(config => {
  console.log('请求拦截器2')
  return config
}, error => {
  console.log('请求拦截器2，reject')
  return Promise.reject(error)
})
request.interceptors.request.use(config => {
  console.log('请求拦截器3')
  return config
}, error => {
  console.log('请求拦截器3，reject')
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(config => {
  console.log('响应拦截器1')
  return config
}, error => {
  console.log('响应拦截器1，reject')
  return Promise.reject(error)
})
request.interceptors.response.use(config => {
  console.log('响应拦截器2')
  return config
}, error => {
  console.log('响应拦截器2，reject')
  return Promise.reject(error)
})
request.interceptors.response.use(config => {
  console.log('响应拦截器3')
  return config
}, error => {
  console.log('响应拦截器3，reject')
  return Promise.reject(error)
})

export default request
