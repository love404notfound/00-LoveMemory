<script setup lang="ts">
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'

interface Props {
  src: string
  hasPrev: boolean
  hasNext: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'prev'): void
  (e: 'next'): void
}>()
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      @click.self="emit('close')"
    >
      <button
        class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
        @click="emit('close')"
        aria-label="关闭"
      >
        <X :size="28" />
      </button>

      <button
        v-if="hasPrev"
        class="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
        @click="emit('prev')"
        aria-label="上一张"
      >
        <ChevronLeft :size="36" />
      </button>

      <img
        :src="src"
        alt="预览"
        class="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
      />

      <button
        v-if="hasNext"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
        @click="emit('next')"
        aria-label="下一张"
      >
        <ChevronRight :size="36" />
      </button>
    </div>
  </Teleport>
</template>
