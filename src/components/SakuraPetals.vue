<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const containerId = 'sakura-petals'
let sakuraInstance: Sakura | null = null

onMounted(() => {
  sakuraInstance = new Sakura(`#${containerId}`, {
    fallSpeed: 1,
    maxSize: 16,
    minSize: 10,
    delay: 250,
    colors: [
      {
        gradientColorStart: 'rgba(255, 107, 129, 0.9)',
        gradientColorEnd: 'rgba(253, 121, 168, 0.9)',
        gradientColorDegree: 120,
      },
    ],
  })
})

onUnmounted(() => {
  if (sakuraInstance) {
    sakuraInstance.stop(true)
    sakuraInstance = null
  }
})
</script>

<template>
  <div :id="containerId" class="fixed inset-0 z-50 pointer-events-none" />
</template>
