import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { coupleData } from '@/data/couple'

export const useCoupleStore = defineStore('couple', () => {
  const info = reactive({ ...coupleData })

  const displayedName = computed(() => `${info.person1.name} & ${info.person2.name}`)

  return { info, displayedName }
})
