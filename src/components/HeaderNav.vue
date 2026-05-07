<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { to: '/', label: '首页' },
  { to: '/gallery', label: '回忆相册' },
  { to: '/story', label: '我们的故事' },
]
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-accent/6 backdrop-blur-lg">
    <nav class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
      <RouterLink
        to="/"
        class="text-lg font-bold text-primary"
      >
        LoveMemory
      </RouterLink>
      <div class="flex gap-1">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="px-3 py-1.5 rounded-lg text-sm transition-colors duration-200"
          :class="
            route.path === link.to
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-text-secondary hover:text-text hover:bg-gray-50'
          "
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
