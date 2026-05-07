import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/features/home/pages/HomePage.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/features/home/pages/GalleryPage.vue'),
    },
    {
      path: '/story',
      name: 'story',
      component: () => import('@/features/home/pages/StoryPage.vue'),
    },
    {
      path: '/love-photo',
      name: 'love-photo',
      component: () => import('@/features/home/pages/LovePhotoPage.vue'),
    },
    {
      path: '/journey',
      name: 'journey',
      component: () => import('@/features/home/pages/JourneyPage.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/features/home/pages/MusicPage.vue'),
    },
  ],
})

export default router
