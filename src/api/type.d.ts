import type { Request } from '.'

declare global {
  interface Window {
    $: {
      post: Request['post']
      delete: Request['delete']
      put: Request['put']
      get: Request['get']
    }
  }
  const $: {
    post: Request['post']
    delete: Request['delete']
    put: Request['put']
    get: Request['get']
  }
}

export interface CustomConfig {
  showMsg?: boolean
}
