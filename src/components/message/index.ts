import { h, render } from 'vue'
import MessagComponent from './message.vue'

export interface MessageProps {
  type: 'success' | 'warn' | 'error'
  content: string
  duration: number
  destroy: () => void
}

type messageStaticFunction = (content: MessageProps['content'], duration?: MessageProps['duration']) => void

interface MessageFunction {
  (type: MessageProps['type'], content: MessageProps['content'], duration?: MessageProps['duration']): void
  success: messageStaticFunction
  error: messageStaticFunction
  warn: messageStaticFunction
}

/**
 * @description Message组件函数式调用
 * @param {*} type 类型：success、warn、error
 * @param {*} content 描述文本
 * @param {*} duration 展示时间（毫秒），默认3000
 */
export const message: MessageFunction = (type, content, duration = 3 * 1000) => {
  const onDestroy = () => {
    render(null, document.body)
  }

  const vnode = h(MessagComponent, {
    type,
    content,
    duration,
    destroy: onDestroy,
  })

  render(vnode, document.body)
}

message.success = (content, duration = 3000) => {
  message('success', content, duration)
}

message.warn = (content, duration = 3000) => {
  message('warn', content, duration)
}

message.error = (content, duration = 3000) => {
  message('error', content, duration)
}
