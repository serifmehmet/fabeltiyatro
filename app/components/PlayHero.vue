<script setup lang="ts">

import { usePlayTabs, type TabId } from '~/composables/usePlayTabs'
interface Props {
  title: string
  subTitle?: string
  image?: any
  premiereDate?: string
  playDuration?: string
  ticketLink?: string
}

const props = defineProps<Props>()

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return null
  const date = new Date(dateString)
  return date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const { setActiveTab } = usePlayTabs()

const handleTicketClick = () => {
  setActiveTab('content-events')
  // Wait for next tick to ensure DOM is updated after tab change
  nextTick(() => {
    const element = document.getElementById('content-events')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}
</script>

<template>
  <div class="o-sidebar-grid__header" id="page-header">
    <header class="c-page-header o-grid c-page-header--event c-page-header--event-small c-page-header--image">
      <div class="c-page-header__media">
        <SanityImage v-if="image" :asset-id="image.asset._ref || image.asset._id" :alt="title"
          class="o-image o-image--picture" />
      </div>
      <div class="c-page-header__wrapper">
        <div class="c-page-header__text">
          <h1 class="c-page-header__title">
            {{ title }}
          </h1>
          <span class="c-page-header__summary">
            {{ subTitle }}
          </span>
        </div>
        <div class="c-page-header__meta">
          <a @click="handleTicketClick" class="o-button">
            <span class="o-button__text">
              <span>Bilet Al</span>
            </span>
            <span class="o-button__icon icon i-chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 70 70">
                <path fill-rule="evenodd"
                  d="M13.646 9.111a2.121 2.121 0 0 1 0-3.048l5.689-5.48a2.07 2.07 0 0 1 2.878 0l34.141 32.893.07.07a2.121 2.121 0 0 1-.07 2.978l-34.14 32.894a2.07 2.07 0 0 1-2.88 0l-5.688-5.481a2.121 2.121 0 0 1 0-3.048L40.516 35 13.646 9.111Z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  </div>

</template>

<style scoped lang="postcss">
.play-hero {
  @apply grid items-center pb-[clamp(2.375rem, 2.21vw+1.537rem, 3.125rem)] pt-[clamp(2.375rem, 2.21vw+1.537rem, 3.125rem)];
  background-color: var(--bg-content);
  grid-template-columns: [full-start] minmax(1.5rem, 1fr) [break-start] repeat(12, [col] minmax(0, 4.9166666667rem)) [break-end] minmax(1.5rem, 1fr) [full-end];
  column-gap: 1.5rem;
  grid-auto-flow: dense;
}

/* Hero Media - Image Side */
.hero-media {
  @apply relative w-full overflow-hidden bg-black col-start-7 col-span-7;

  grid-row: 1;
  min-height: 400px;
}

.hero-image {
  @apply h-full w-full object-cover;
}

.hero-image-placeholder {
  @apply flex h-full w-full items-center justify-center bg-white/5;
}

.placeholder-text {
  @apply text-2xl font-bold main-text-color;
}

/* Hero Wrapper - Text Side */
.hero-wrapper {
  @apply flex flex-col justify-between col-start-2 col-span-4;

  grid-row: 1;
}

/* Hero Text */
.hero-text {
  @apply mb-8;
}

.hero-title {
  @apply text-4xl font-bold leading-tight main-text-color md:text-5xl lg:text-6xl;
}

.hero-pre-title {
  @apply mb-2 block text-base font-normal main-text-color md:text-lg;
}

/* Hero Meta & Actions */
.hero-meta {
  @apply flex flex-col gap-6 md:flex-row md:items-end md:justify-between;
}

.hero-datetime {
  @apply flex flex-wrap items-center gap-2 main-text-color;
}

.datetime-text {
  @apply text-sm md:text-base main-text-color;
}

.duration-text {
  @apply text-sm main-text-color md:text-base;
}

/* Hero Actions */
.hero-actions {
  @apply flex items-center;
}

.hero-cta {
  @apply inline-flex items-center gap-3 rounded-md bg-accent px-0 py-3 text-sm font-bold tracking-wider main-text-color transition hover:bg-accent/90 md:px-4 md:py-4;
  letter-spacing: 0.1em;
}

.cta-text {
  @apply inline-block;
}

.cta-icon {
  @apply inline-flex h-4 w-4 items-center justify-center md:h-5 md:w-5;
}

.cta-icon svg {
  @apply h-full w-full;
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .play-hero {
    @apply grid-cols-1;
  }

  .hero-media {
    @apply order-1;
    grid-column: full-start / full-end;
  }

  .hero-wrapper {
    @apply order-2;
    grid-column: break-start / break-end;
  }
}
</style>
