<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const containerId = 'sakura-petals'
let sakuraInstance: Sakura | null = null
let mediaQuery: MediaQueryList | null = null
let idleCallbackId: number | null = null
let fallbackTimer: ReturnType<typeof setTimeout> | null = null
let isUnmounted = false
let sakuraScriptPromise: Promise<void> | null = null

function cancelPendingLoad() {
  if (idleCallbackId !== null && 'cancelIdleCallback' in window) {
    window.cancelIdleCallback(idleCallbackId)
    idleCallbackId = null
  }
  if (fallbackTimer) {
    clearTimeout(fallbackTimer)
    fallbackTimer = null
  }
}

function loadSakuraScript(): Promise<void> {
  if (typeof Sakura !== 'undefined') {
    return Promise.resolve()
  }

  if (sakuraScriptPromise) {
    return sakuraScriptPromise
  }

  sakuraScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-sakura-script="true"]',
    )

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true })
      existingScript.addEventListener(
        'error',
        () => {
          sakuraScriptPromise = null
          reject(new Error('Failed to load sakura script.'))
        },
        { once: true },
      )
      return
    }

    const script = document.createElement('script')
    script.src = `${import.meta.env.BASE_URL}js/sakura.min.js`
    script.async = true
    script.dataset.sakuraScript = 'true'
    script.onload = () => resolve()
    script.onerror = () => {
      sakuraScriptPromise = null
      reject(new Error('Failed to load sakura script.'))
    }
    document.head.appendChild(script)
  })

  return sakuraScriptPromise
}

async function startSakura() {
  await loadSakuraScript()
  if (isUnmounted || mediaQuery?.matches) return

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
}

onMounted(() => {
  mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (mediaQuery.matches) return

  if ('requestIdleCallback' in window) {
    idleCallbackId = window.requestIdleCallback(() => {
      idleCallbackId = null
      void startSakura().catch(() => {})
    })
    return
  }

  fallbackTimer = setTimeout(() => {
    fallbackTimer = null
    void startSakura().catch(() => {})
  }, 450)
})

onUnmounted(() => {
  isUnmounted = true
  cancelPendingLoad()
  if (sakuraInstance) {
    sakuraInstance.stop(true)
    sakuraInstance = null
  }
  mediaQuery = null
})
</script>

<template>
  <div :id="containerId" class="fixed inset-0 z-50 pointer-events-none" />
</template>
