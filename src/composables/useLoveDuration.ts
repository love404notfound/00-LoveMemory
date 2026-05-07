import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useLoveDuration(startDate: Date) {
  const now = ref(new Date())
  let timer: ReturnType<typeof setInterval> | null = null

  function updateNow() {
    now.value = new Date()
  }

  onMounted(() => {
    timer = setInterval(updateNow, 1000)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  const duration = computed(() => {
    const diff = now.value.getTime() - startDate.getTime()
    if (diff < 0) return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }

    const totalSeconds = Math.floor(diff / 1000)
    const years = Math.floor(totalSeconds / (365.25 * 24 * 3600))
    const afterYears = totalSeconds - years * 365.25 * 24 * 3600
    const months = Math.floor(afterYears / (30.44 * 24 * 3600))
    const afterMonths = afterYears - months * 30.44 * 24 * 3600
    const days = Math.floor(afterMonths / (24 * 3600))
    const afterDays = afterMonths - days * 24 * 3600
    const hours = Math.floor(afterDays / 3600)
    const afterHours = afterDays - hours * 3600
    const minutes = Math.floor(afterHours / 60)
    const seconds = afterHours % 60

    return { years, months, days, hours, minutes, seconds }
  })

  return { duration }
}
