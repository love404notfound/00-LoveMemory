<script setup lang="ts">
import type { GalleryItem } from '@/types'
import PhotoCard from './PhotoCard.vue'

interface Props {
  items: GalleryItem[]
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'open', index: number): void
}>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <PhotoCard
      v-for="(item, index) in items"
      :key="item.id"
      :src="item.src"
      :title="item.title"
      :description="item.description"
      @click="emit('open', index)"
    />
  </div>
</template>
