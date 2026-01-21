<script setup lang="ts">
import { playsQuery } from '~/sanity/queries/playQueries'

interface Play {
  _id: string
  title: string
  subTitle?: string
  slug: string
  playImage?: any
  playShortDescription?: string
  premiereDate?: string
  ticketLink?: string
  playDuration?: string

}

// Fetch all plays from Sanity
const { data: plays } = await useSanityQuery<Play[]>(playsQuery)

// Format date for display
const formatDate = (dateString: string | undefined) => {
  if (!dateString) return null
  const date = new Date(dateString)
  return date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Set up SEO metadata
useSeo({
  fallbackTitle: 'Oyunlarımız',
  fallbackDescription: 'Fabel Tiyatro oyunları - Sahneye koyduğumuz tüm oyunları keşfedin.',
})
</script>

<template>
  <main class="o-page-grid o-grid o-grid--flush" role="main" id="site-main" tabindex="-1">
    <div class="o-page-grid__header" id="page-header">
      <header class="c-page-header o-grid c-page-header--whats-on">
        <div class="c-page-header__wrapper">
          <div class="c-page-header__text">
            <h1 class="c-page-header__title">Oyunlarımız</h1>
          </div>
        </div>
      </header>
      <div class="o-page-grid__content" id="page-content">
        <section class="o-grid">
          <ul class="o-grid__item o-list">
            <li class="o-block" v-for="play in plays" :key="play._id">
              <div class="c-media c-media--event is-clickable">
                <div class="c-media__image">
                  <div class="o-image">
                    <SanityImage v-if="play.playImage" :asset-id="play.playImage.asset._ref || play.playImage.asset._id"
                      :width="800" :height="500" :alt="play.title" class="o-image__img" />

                  </div>
                </div>
                <div class="c-media__text">
                  <h3 class="c-media__title">{{ play.title }}</h3>
                  <p class="c-media__posttitle">{{ play.subTitle }}</p>
                  <p class="c-media__summary">
                    {{ play.playShortDescription }}
                  </p>
                  <div class="c-media__actions">
                    <NuxtLink :to="`/oyun/${play.slug}`" class="o-button o-button--primary">Detaylar
                    </NuxtLink>
                  </div>
                </div>

              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>

</template>

<style scoped lang="postcss"></style>
