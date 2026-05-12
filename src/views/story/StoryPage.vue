<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { storyMilestones } from '@/data/story'
import Timeline from './Timeline.vue'
</script>

<template>
  <div class="px-4 pb-12 sm:px-6 lg:px-8">
    <PageHeader
      eyebrow="Storyline"
      title="我们的故事"
      description="从相识到相知，从热烈心动到笃定陪伴，把那些重要的节点按时间轻轻摊开。"
    />
    <section class="section-card mx-auto mb-6 max-w-5xl rounded-[2rem] p-6 md:p-8">
      <p class="text-center text-base leading-8 text-text-secondary">
        故事并不总是发生在盛大的场景里。很多真正难忘的片段，反而藏在一句晚安、一次和好、
        一次并肩看风景，或者一首你发给我的歌里。
      </p>
    </section>
    <section class="mx-auto max-w-5xl pb-8">
      <Timeline :milestones="storyMilestones" />
    </section>
  </div>
</template>
