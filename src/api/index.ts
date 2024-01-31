import type { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import type { CustomConfig } from './type'

export class Request {
  private readonly axios: AxiosInstance

  constructor(params: CreateAxiosDefaults) {
    this.axios = axios.create(params)

    this.axios.interceptors.request.use((config) => {
      nprogress.start()
      return config
    }, (error) => {
      nprogress.done()
      return Promise.reject(error)
    })

    this.axios.interceptors.response.use((response) => {
      nprogress.done()
      return response
    }, (error) => {
      nprogress.done()
      return Promise.reject(error)
    })
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  private request<T extends Record<string, any>>(requestConfig: AxiosRequestConfig, customConfig: CustomConfig = { showMsg: false }) {
    return new Promise<T>((resolve, reject) => {
      this.axios<T>(requestConfig).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        // customConfig.showMsg && message.error(error.message)
        reject(error)
      })
    })
  }

  public post<T extends Record<string, any>, K extends Record<string, any>>(data: K, requestConfig: Omit<AxiosRequestConfig, 'method' | 'data'>, customConfig?: CustomConfig) {
    return this.request<T>({
      method: 'POST',
      data,
      ...requestConfig,
    }, customConfig)
  }

  public delete<T extends Record<string, any>, K extends Record<string, any>>(data: K, requestConfig: Omit<AxiosRequestConfig, 'method' | 'params'>, customConfig?: CustomConfig) {
    return this.request<T>({
      method: 'DELETE',
      params: data,
      ...requestConfig,
    }, customConfig)
  }

  public put<T extends Record<string, any>, K extends Record<string, any>>(data: K, requestConfig: Omit<AxiosRequestConfig, 'method' | 'params'>, customConfig?: CustomConfig) {
    return this.request<T>({
      method: 'PUT',
      params: data,
      ...requestConfig,
    }, customConfig)
  }

  public get<T extends Record<string, any>, K extends Record<string, any>>(data: K, requestConfig: Omit<AxiosRequestConfig, 'method' | 'params'>, customConfig?: CustomConfig) {
    return this.request<T>({
      method: 'GET',
      params: data,
      ...requestConfig,
    }, customConfig)
  }
}

const request = new Request({
  baseURL: 'https://www.tuocad.com/tuo-cms',
})

window.$ = {
  post: request.post.bind(request),
  delete: request.delete.bind(request),
  put: request.put.bind(request),
  get: request.get.bind(request),
}
