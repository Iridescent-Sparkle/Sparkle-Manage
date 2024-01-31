import { h, render } from 'vue'
import Message from './message.vue'

export function message() {
  const vnode = h(Message)

  render(vnode, document.body)
}
