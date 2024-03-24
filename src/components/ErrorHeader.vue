<script setup lang="ts">
interface Props {
  errorCode?: string
  errorTitle?: string
  errorDescription?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="mb-4 text-center">
    <!-- 👉 Title and subtitle -->
    <h1
      v-if="props.errorCode"
      class="text-h1 font-weight-medium"
    >
      {{ props.errorCode }}
    </h1>
    <h5
      v-if="props.errorTitle"
      class="text-h5 font-weight-medium mb-3"
    >
      {{ props.errorTitle }}
    </h5>
    <p v-if="props.errorDescription">
      {{ props.errorDescription }}
    </p>
  </div>
</template>
