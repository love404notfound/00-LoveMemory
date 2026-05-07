import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import { coupleData } from '@/data/couple'
import { galleryItems } from '@/data/gallery'
import { storyMilestones } from '@/data/story'
import type { GalleryItem, StoryMilestone } from '@/types'

export const useCoupleStore = defineStore('couple', () => {
  const info = reactive({ ...coupleData })
  const gallery = ref<GalleryItem[]>([...galleryItems])
  const story = ref<StoryMilestone[]>([...storyMilestones])

  const displayedName = computed(() => `${info.person1.name} & ${info.person2.name}`)

  return { info, gallery, story, displayedName }
})
