import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
import { message } from 'ant-design-vue'

// 获取本地Token
const getToken: () => string = () => window.localStorage.getItem('_AUTH_TOKEN') || ''

// 配置axios实例
const instance = axios.create()
instance.defaults.baseURL = import.meta.env.VITE_BASE_URL
instance.defaults.timeout = 8000
instance.defaults.withCredentials = false
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
instance.defaults.transformRequest = (data) => qs.stringify(data)
instance.defaults.validateStatus = (status) => status >= 200 && status <= 400

// 添加请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    config.headers!.Authorization = getToken()
    return config
  },
  () =>
    // 对请求错误做些什么
    Promise.reject(new Error('请求未发送'))
)
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // const { data, status, statusText, headers, config, request } = response
    return response
  },
  (error) => {
    if (!window.navigator.onLine) {
      // 断网处理比如跳转到断网页面
      message.error('网络异常，请检查网络').then()
      return Promise.reject(error)
    }
    if (!error.response) {
      message.error('系统繁忙，请稍后再试').then()
      return Promise.reject(error)
    }
    // 统一处理400以上的状态码
    if (error.response.status === 401) {
      message.error('用户未认证').then()
    } else if (error.response.status === 403) {
      message.error('token过期了').then()
    } else if (error.response.status === 404) {
      message.error('访问内容不存在').then()
    } else if (error.response.status === 500) {
      message.error('系统繁忙，请稍后再试').then()
    }
    return Promise.reject(error)
  }
)

const httpRequest = (url: string, type = 'GET', data = {}) => {
  return new Promise((resolve, reject) => {
    const option = {
      url,
      method: type
    } as AxiosRequestConfig
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    instance(option)
      .then((res: AxiosResponse) => {
        if (res.status === 200 || res.status === 201) {
          resolve(res.data)
        } else {
          // 此处可统一处理非200-400之间的状态码
          Error(res.data.msg)
          reject(res.data)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default httpRequest
