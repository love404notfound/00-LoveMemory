<script setup lang="ts">
interface Props {
  src: string
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="group relative rounded-xl overflow-hidden bg-surface shadow-sm border border-gray-100 cursor-pointer">
    <div class="aspect-[4/3] overflow-hidden">
      <img
        :src="src"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <h3 class="text-white font-medium">{{ title }}</h3>
      <p class="text-white/80 text-sm mt-1 line-clamp-2">{{ description }}</p>
    </div>
  </div>
</template>
