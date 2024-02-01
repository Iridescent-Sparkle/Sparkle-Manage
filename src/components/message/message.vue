<script lang="ts">
import type { MessageProps } from './index'

const animDuration = '0.5s'

const styles = {
  warn: {
    icon: 'warn',
    fillClass: 'fill-warn-300',
    textClass: 'text-warn-300',
    containerClass:
      'bg-warn-100 border-warn-200 hover:shadow-lg hover:shadow-warn-100',
  },
  error: {
    icon: 'error',
    fillClass: 'fill-error-300',
    textClass: 'text-error-300',
    containerClass:
      'bg-error-100 border-error-200 hover:shadow-lg hover:shadow-error-100',
  },
  success: {
    icon: 'success',
    fillClass: 'fill-success-300',
    textClass: 'text-success-300',
    containerClass:
      'bg-success-100 border-success-200 hover:shadow-lg hover:shadow-success-100',
  },
}
</script>

<script setup lang="ts">
const props = defineProps<MessageProps>()

/** 控制展示 */
const visible = ref(false)

onMounted(() => {
  visible.value = true
  // 展示完之后立即关闭
  setTimeout(() => {
    visible.value = false
    setTimeout(() => {
      if (props.destroy)
        props.destroy()
    }, Number.parseInt(animDuration.replace('0.', '').replace('s', ''), 10) * 100)
  }, props.duration)
})
</script>

<template>
  <transition name="down">
    <div
      v-show="visible"
      class="fixed left-[50%] top-[20px] z-50 min-w-[420px] flex translate-x-[-50%] cursor-pointer items-center border rounded-sm px-3 py-1.5"
      :class="styles[type].containerClass"
    >
      <span :class="styles[type].textClass" class="i-mdi-alert-circle mr-1.5 h-4 w-4" />
      <span class="text-sm" :class="styles[type].textClass">{{ content }}</span>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.down-enter-active,
.down-leave-active {
  transition: all v-bind(animDuration);
}

.down-enter-from,
.down-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -100px, 0);
}
</style>
