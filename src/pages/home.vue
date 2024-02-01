<script setup lang="ts">
import { message } from '@/components/message'

onMounted(() => {
  message.success('Hello World')
})
</script>

<template>
  <div>
    <h2>example</h2>
  </div>
</template>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: false
</route>
