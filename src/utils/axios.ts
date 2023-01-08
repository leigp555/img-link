import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { alert } from '@/components/Message'

// 获取本地Token
const getToken: () => string = () => window.localStorage.getItem('_AUTH_TOKEN') || ''

// 配置axios实例
const instance = axios.create()
instance.defaults.baseURL = import.meta.env.VITE_BASE_URL
instance.defaults.timeout = 8000
instance.defaults.withCredentials = false
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
instance.defaults.validateStatus = (status) => status >= 200 && status < 400

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
      alert.error('网络异常，请检查网络')
      return
    }
    if (!error.response) {
      alert.error('系统繁忙，请稍后再试')
      return
    }
    // 统一处理400以上的状态码
    if (error.response.status === 401) {
      alert.error('用户未认证')
      return
    }
    if (error.response.status === 403) {
      alert.error('token过期了')
      return
    }
    if (error.response.status === 404) {
      alert.error('访问内容不存在')
      return
    }
    if (error.response.status === 500) {
      alert.error('系统繁忙，请稍后再试')
      return
    }
    // 除上面的错误状态码统一处理外，其余单独处理
    return Promise.reject(error)
  }
)

// 响应数据类型
export interface IResponseData<T = any> {
  code: number
  msg: string
  data: T
}

async function httpRequest<T>(config: AxiosRequestConfig) {
  return instance.request<IResponseData<T>>(config).then((res) => res.data)
}

export default httpRequest
