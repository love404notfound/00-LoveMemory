<script setup lang="ts">
interface Props {
  title: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <div class="text-center py-8 px-4">
    <h1 class="text-3xl md:text-4xl font-bold text-text">{{ title }}</h1>
    <p v-if="description" class="mt-3 text-text-secondary max-w-md mx-auto">
      {{ description }}
    </p>
  </div>
</template>
