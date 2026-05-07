<script setup lang="ts">
import { useCoupleStore } from '@/stores/couple'
import HeroSection from '@/components/HeroSection.vue'
import CountdownCard from '@/components/CountdownCard.vue'
import QuickStats from '@/components/QuickStats.vue'
import StaggerFadeIn from '@/components/StaggerFadeIn.vue'
import WaveDivider from '@/components/WaveDivider.vue'

const couple = useCoupleStore()
</script>

<template>
  <div>
    <StaggerFadeIn>
      <HeroSection />
      <!-- <WaveDivider /> -->
      <div class="bg-accent/10">
        <section class="max-w-3xl mx-auto px-4 pt-4">
          <CountdownCard :start-date="couple.info.anniversary" :label="couple.info.sinceLabel" />
        </section>
        <section class="max-w-3xl mx-auto px-4 pt-10 pb-4">
          <QuickStats :stats="couple.info.stats" />
        </section>
      </div>
    </StaggerFadeIn>
  </div>
</template>
