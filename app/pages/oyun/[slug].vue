<script setup lang="ts">
import { playBySlugQuery } from '~/sanity/queries/playQueries'
import type { PortableTextBlock } from '@portabletext/types'

interface Play {
  _id: string
  title: string
  subTitle?: string
  slug: string
  playImage?: any
  playPoster?: any
  playDescription?: PortableTextBlock[]
  premiereDate?: string
  playDuration?: string
  ticketLink?: string
  seo?: {
    title?: string
    description?: string
    image?: any
    noIndex?: boolean
  }
  gallery?: any[]
  events?: Array<{
    _id: string
    date?: string
    place?: string
    ticketLink?: string
  }>
  casts?: Array<{

    fullName: string,
    image?: any

  }>
  backstage?: Array<{
    order: number
    member: {
      fullName: string
      image?: any
    }
    roles: string[]
  }>
}

const route = useRoute()
const slug = route.params.slug as string

const { data: play } = await useSanityQuery<Play>(playBySlugQuery, { slug })

// Initialize tab from query parameter if provided
const { setActiveTab } = usePlayTabs()
const tabParam = route.query.tab as string
if (tabParam && [
  'content-the-play',
  'content-the-company',
  'content-events',
  'content-gallery',
  'content-rehearsal-notes'
].includes(tabParam)) {
  setActiveTab(tabParam as any)
}

// Handle case where play is not found
if (!play.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Oyun bulunamadı',
    fatal: true
  })
}

// Set up SEO metadata using seo field from Sanity or fallback to play data
useSeo({
  seo: play.value?.seo,
  fallbackTitle: play.value?.title || 'Oyun',
  fallbackDescription: play.value?.subTitle || 'Fabel Tiyatro oyunu',
})
</script>

<template>

  <main v-if="play" class="o-sidebar-grid o-grid o-grid--flush" role="main" id="site-main" tabindex="-1">
    <PlayHero :title="play.title" :sub-title="play.subTitle" :image="play.playImage || play.playPoster"
      :premiere-date="play.premiereDate" :play-duration="play.playDuration" :ticket-link="play.ticketLink" />

    <DetailedPlayInfo />

    <DetailedPlayContent :play-description="play.playDescription" :casts="play.casts" :backstage="play.backstage"
      :events="play.events" :gallery="play.gallery" :title="play.title" />
  </main>
  <!-- Hero Section -->



</template>

<style scoped lang="postcss">
/* Scroll offset for anchor links */
:target {
  scroll-margin-top: 140px;
}
</style>