import type { Request } from '.'

interface GlobalVariable {
  post: Request['post']
  delete: Request['delete']
  put: Request['put']
  get: Request['get']
}

declare global {
  interface Window {
    $: GlobalVariable
  }
  const $: GlobalVariable
}

export interface CustomConfig {
  showMsg?: boolean
}
