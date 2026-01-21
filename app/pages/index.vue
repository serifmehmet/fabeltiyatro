<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import logoImage from "~/assets/images/fabel_tiyatro_logo.png";
import instaIcon from "~/assets/images/insta_icon.png";
import facebookIcon from "~/assets/images/fb_icon.png";
import youtubeIcon from "~/assets/images/yt_icon.png";
import wpIcon from "~/assets/images/wp_icon.png";
import mailingListBanner from "~/assets/images/mailing-list-banner.jpg";
import CarbonBadge from "vue-carbonbadge";
import { homePageQuery } from "~/sanity/queries/homePageQueries";

type SubmitState = "idle" | "success" | "error";

interface SliderImage {
  asset: {
    _id: string;
    url: string;
  };
}

interface SelectedPlay {
  _id: string;
  title: string;
  slug: string;
  slogan: string;
  image?: string;
}

interface HomePage {
  _id: string;
  slider?: SliderImage[];
  seo?: {
    title?: string;
    description?: string;
    image?: any;
    noIndex?: boolean;
  };
  selectedPlay?: SelectedPlay[];
}

// Fetch homepage data from Sanity
const { data: homePage } = await useSanityQuery<HomePage>(homePageQuery);

// Set up SEO
useSeo({
  seo: homePage.value?.seo,
  fallbackTitle: "Anasayfa",
  fallbackDescription: "Sahnesiz tiyatro, hikayesi bol topluluk.",
});

// Slider logic
const currentSlideIndex = ref(0);
let sliderInterval: NodeJS.Timeout | null = null;

// Get the maximum count between slider and selectedPlay arrays
const slideCount = computed(() => {
  const sliderCount = homePage.value?.slider?.length || 0;
  const playCount = homePage.value?.selectedPlay?.length || 0;
  return Math.max(sliderCount, playCount);
});

// Get current slider image (synchronized with play index)
const currentSliderImage = computed(() => {
  if (!homePage.value?.slider || homePage.value.slider.length === 0)
    return null;
  const index = currentSlideIndex.value % homePage.value.slider.length;
  return homePage.value.slider[index];
});

// Get current selected play (synchronized with slider index)
const currentSelectedPlay = computed(() => {
  if (!homePage.value?.selectedPlay || homePage.value.selectedPlay.length === 0)
    return null;
  const index = currentSlideIndex.value % homePage.value.selectedPlay.length;
  return homePage.value.selectedPlay[index];
});

const nextSlide = () => {
  if (slideCount.value > 0) {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % slideCount.value;
  }
};

onMounted(() => {
  if (slideCount.value > 1) {
    sliderInterval = setInterval(nextSlide, 7000);
  }
});

onUnmounted(() => {
  if (sliderInterval) {
    clearInterval(sliderInterval);
  }
});

const email = ref("");
const submitState = ref<SubmitState>("idle");
const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/fabeltiyatro",
    description: "Provalardan kareler ve duyurular",
    icon: instaIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/fabeltiyatro",
    description: "Topluluğumuzdan uzun hikayeler",
    icon: facebookIcon,
  },
  {
    name: "WhatsApp",
    href: "https://chat.whatsapp.com/D6bhDXuecjE8b94yGHBmfp?mode=wwt",
    description: "WhatsApp topluluğumuza katılın",
    icon: wpIcon,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@FabelTiyatro",
    description: "Youtube kanalımıza abone olun",
    icon: youtubeIcon,
  },
];

const newsletterHighlights = [
  {
    title: "Aylık oyun ve turne takvimi",
    detail:
      "Aylık oyun ve turne takvimimizi, oyunlarımızdan notlarımızı paylaşıyoruz.",
  },

  {
    title: "Özel davetler",
    detail:
      "Seyircili prova tarihlerimizi, provalarımızdan notlarımızı ve daha birçok özel içeriğimizi paylaşıyoruz.",
  },
];

const successMessage =
  "Katıldığınız için teşekkürler. Yeni oyun ve etkinlik duyurularını ilk siz alacaksınız!";
const errorMessage = computed(() => {
  if (!email.value) {
    return "Lütfen e-posta adresinizi girin.";
  }
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
  if (!pattern.test(email.value)) {
    return "Geçerli bir e-posta adresi girin.";
  }
  return "";
});

const handleSubmit = () => {
  if (errorMessage.value) {
    submitState.value = "error";
    return;
  }
  submitState.value = "success";
  email.value = "";
};
</script>

<template>
  <main class="o-page-grid o-grid o-grid--flush" id="site-main" role="main" tabindex="-1">
    <div class="o-page-grid__header" id="page-header">
      <header class="c-page-header o-grid c-page-header--home">
        <div class="c-page-header__promo">
          <Transition name="slide-fade" mode="out-in">
            <div class="c-promo" v-if="currentSliderImage || currentSelectedPlay" :key="currentSlideIndex">
              <div class="c-promo__media o-grid">
                <picture class="o-image o-image--picture c-promo__image">
                  <SanityImage v-if="currentSliderImage" :asset-id="currentSliderImage.asset._id" :width="400"
                    :height="225" alt class="o-image__img" loading="eager" style="--object-position: 50% 50%" />
                </picture>
              </div>
              <div class="c-promo__text o-grid" v-if="currentSelectedPlay">
                <div class="c-promo__primary">
                  <h2 class="c-promo__heading">
                    {{ currentSelectedPlay.title }}
                  </h2>
                  <p class="c-promo__subheading">
                    {{ currentSelectedPlay.slogan }}
                  </p>
                </div>
                <div class="c-promo__secondary">
                  <div class="c-promo__actions">
                    <NuxtLink v-if="currentSelectedPlay.slug" :to="`/oyun/${currentSelectedPlay.slug}`"
                      class="o-button">Detaylar
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </header>
    </div>
    <div class="o-block o-banner o-grid__item o-block--row-5">
      <NuxtLink to="/mail-listesi" class="c-banner c-banner--image" data-sc-gtm-category="Banner"
        data-sc-gtm-label="Listeye Katılın">
        <div class="c-banner__text">
          <h2 class="c-banner__title">Listeye Katılın</h2>
          <div class="c-banner__summary">
            <p>
              Oyunlarımızdan, seyircili provalarımızdan ve bilet
              kampanyalarımızdan ilk siz haberdar olun
            </p>
          </div>
          <div class="c-banner__action o-button o-button--outline">
            <span class="o-button__text">Mail Listemize Katılın</span>
            <span class="o-button__icon icon i-chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 70 70">
                <path fill-rule="evenodd"
                  d="M13.646 9.111a2.121 2.121 0 0 1 0-3.048l5.689-5.48a2.07 2.07 0 0 1 2.878 0l34.141 32.893.07.07a2.121 2.121 0 0 1-.07 2.978l-34.14 32.894a2.07 2.07 0 0 1-2.88 0l-5.688-5.481a2.121 2.121 0 0 1 0-3.048L40.516 35 13.646 9.111Z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="o-image o-image--cover c-banner__image">
          <img :src="mailingListBanner" alt="Mail listesi banner" class="o-image__img" />
        </div>
      </NuxtLink>
    </div>
  </main>

  <!-- <div class="ml-embedded" data-form="pOMSZL"></div> -->
</template>

<style scoped lang="postcss">
.page-main {
  @apply relative overflow-hidden grid;
  background-color: var(--bg-content);
  grid-template-columns:
    [full-start] minmax(1.5rem, 1fr) [break-start] repeat(12,
      [col] minmax(0, 4.9166666667rem)) [break-end] minmax(1.5rem, 1fr) [full-end];
  column-gap: 1.5rem;
}

.hero-section {
  @apply relative z-10 flex min-h-[75vh] flex-col gap-12 pb-16 pt-24 md:flex-row md:items-start;
  grid-column: break-start / break-end;
}

.hero-content {
  @apply flex-1 space-y-3;
}

.hero-header {
  @apply flex items-center gap-4;
}

.hero-subtitle {
  @apply uppercase text-white/60;
  letter-spacing: 0.35em;
}

.hero-title {
  @apply text-4xl font-semibold leading-tight sm:text-5xl;
}

.hero-description {
  @apply max-w-xl text-lg text-white/80;
}

.newsletter-form {
  @apply space-y-3;
}

.newsletter-label {
  @apply block text-sm font-medium text-white/70;
}

.newsletter-fields {
  @apply flex flex-col gap-3 sm:flex-row;
}

.newsletter-input {
  @apply w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/60;
}

.newsletter-button {
  @apply rounded-md bg-accent px-5 py-3 text-base font-semibold text-night transition focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-black hover:bg-yellow-400;
}

.newsletter-button:hover {
  box-shadow: 0 12px 24px rgba(241, 196, 15, 0.25);
}

.newsletter-success {
  @apply text-sm text-accent/90;
}

.newsletter-error {
  @apply text-sm text-red-400;
}

.newsletter-note {
  @apply text-xs text-white/50;
}

.newsletter-aside {
  @apply flex-1 space-y-5 rounded-3xl border border-white/10 p-8 backdrop-blur;
  background-color: rgba(255, 255, 255, 0.03);
}

.newsletter-aside-heading {
  @apply text-2xl font-semibold;
}

.newsletter-aside-list {
  @apply space-y-6;
}

.newsletter-aside-item {
  @apply rounded-lg border border-white/5 p-4;
  background-color: rgba(255, 255, 255, 0.02);
}

.newsletter-aside-item-title {
  @apply text-lg font-medium text-accent;
}

.newsletter-aside-item-text {
  @apply mt-1 text-sm text-white/70;
}

.newsletter-aside-note {
  @apply text-sm text-white/60;
}

.cta-section {
  @apply relative z-10 border-t border-white/5 pt-5;
}

.cta-container {
  @apply w-full;
}

.cta-text {
  @apply max-w-xl space-y-3 mb-8;
}

.cta-heading {
  @apply text-2xl font-semibold;
}

.cta-description {
  @apply text-sm text-white/70;
}

.cta-links {
  @apply grid grid-cols-1 gap-4 sm:grid-cols-2;
}

.cta-link {
  @apply flex w-full items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-left transition hover:border-accent/80 hover:bg-accent/10;
  background-color: rgba(255, 255, 255, 0.04);
}

.cta-link-icon-wrapper {
  @apply flex h-12 w-12 items-center justify-center text-white;
}

.cta-link-icon {
  @apply h-6 w-6 fill-current;
}

.cta-link-text {
  @apply flex flex-col gap-1;
}

.cta-link-name {
  @apply text-sm font-semibold text-white;
}

.cta-link-description {
  @apply text-xs text-white/60;
}

.site-footer {
  @apply relative z-10 border-t border-white/5 py-10 text-center text-xs text-white/50;
  grid-column: break-start / break-end;
}

.ml-form-align-center {
  text-align: none;
}

.ml-form-embedContainer .ml-form-embedWrapper.embedForm {
  width: 100% !important;
  max-width: 100% !important;
}

/* Slider transition effects */
.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
