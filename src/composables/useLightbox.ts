import { ref, computed } from 'vue'

interface LightboxItem {
  src: string
}

export function useLightbox<T extends LightboxItem>(items: T[]) {
  const isOpen = ref(false)
  const currentIndex = ref(0)

  const currentItem = computed(() => items[currentIndex.value])

  function open(index: number) {
    currentIndex.value = index
    isOpen.value = true
    document.addEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'hidden'
  }

  function close() {
    isOpen.value = false
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  }

  function next() {
    if (currentIndex.value < items.length - 1) {
      currentIndex.value++
    }
  }

  function previous() {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') previous()
  }

  return { isOpen, currentIndex, currentItem, open, close, next, previous }
}
