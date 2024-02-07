<script setup lang="ts">
import { message } from '@/components/message/index'

onMounted(() => {
  message.success('Hello World')
})
</script>

<template>
  <div>
    <VCard>1212</VCard>
  </div>
</template>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: false
</route>
