<script setup lang="ts">
import { computed, ref } from 'vue'
import logoImage from '~/assets/images/fabel_tiyatro_logo.png'
import instaIcon from '~/assets/images/insta_icon.png'
import facebookIcon from '~/assets/images/fb_icon.png'
import youtubeIcon from '~/assets/images/yt_icon.png'
import wpIcon from '~/assets/images/wp_icon.png'

type SubmitState = 'idle' | 'success' | 'error'

const email = ref('')
const submitState = ref<SubmitState>('idle')
const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/fabeltiyatro',
    description: 'Provalardan kareler ve duyurular',
    icon: instaIcon
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/fabeltiyatro',
    description: 'Topluluğumuzdan uzun hikayeler',
    icon: facebookIcon
  },
  {
    name: 'WhatsApp',
    href: 'https://chat.whatsapp.com/D6bhDXuecjE8b94yGHBmfp?mode=wwt',
    description: 'WhatsApp topluluğumuza katılın',
    icon: wpIcon
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/@FabelTiyatro',
    description: 'Youtube kanalımıza abone olun',
    icon: youtubeIcon
  }
]

const newsletterHighlights = [
  {
    title: 'Aylık oyun ve turne takvimi',
    detail: 'Aylık oyun ve turne takvimimizi, oyunlarımızdan notlarımızı paylaşıyoruz.'
  },
  
  {
    title: 'Özel davetler',
    detail: 'Seyircili prova tarihlerimizi, provalarımızdan notlarımızı ve daha birçok özel içeriğimizi paylaşıyoruz.'
  }
]

const successMessage = 'Katıldığınız için teşekkürler. Yeni oyun ve etkinlik duyurularını ilk siz alacaksınız!'
const errorMessage = computed(() => {
  if (!email.value) {
    return 'Lütfen e-posta adresinizi girin.'
  }
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u
  if (!pattern.test(email.value)) {
    return 'Geçerli bir e-posta adresi girin.'
  }
  return ''
})

const handleSubmit = () => {
  if (errorMessage.value) {
    submitState.value = 'error'
    return
  }
  submitState.value = 'success'
  email.value = ''
}
</script>

<template>
  <main class="page-main">
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-header">
          <img
            :src="logoImage"
            alt="Fabel Tiyatro logosu"
            class="hero-logo"
          />
          <!-- <div>
            <p class="hero-subtitle">Fabel Tiyatro</p>
            <h1 class="hero-title">Sahnesiz tiyatro, hikayesi bol topluluk.</h1>
          </div> -->
        </div>
        <p class="hero-description">
          Şu an yoğun bir prova dönemindeyiz. Sizinle buluşmak için
          sabırsızlanıyoruz. Bültenimize katılın; ilk sahneye çıktığımızda haberdar olun.
        </p>

        <section class="cta-section">
      <div class="cta-container">
        <div class="cta-text">
          <h2 class="cta-heading">Topluluğa katılın</h2>
          <p class="cta-description">
            Oyunlardan ve provalardan haberler, seyirci çağrıları ve daha bir çok içerik sosyal medya kanallarımızda.
          </p>
        </div>
        <div class="cta-links">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="cta-link"
          >
            <div class="cta-link-icon-wrapper">
              <img
                :src="link.icon"
                alt="Fabel Tiyatro logosu"
                class="hero-logo"
              />
            </div>
            <span class="cta-link-text">
              <span class="cta-link-name">{{ link.name }}</span>
              <span class="cta-link-description">{{ link.description }}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
      </div>

      <section class="newsletter-aside">
        <h2 class="newsletter-aside-heading">Bültenimizde neler var?</h2>
        <ul class="newsletter-aside-list">
          <li v-for="item in newsletterHighlights" :key="item.title" class="newsletter-aside-item">
            <h3 class="newsletter-aside-item-title">{{ item.title }}</h3>
            <p class="newsletter-aside-item-text">
              {{ item.detail }}
            </p>
          </li>
        </ul>
        
        <div class="ml-embedded" data-form="pOMSZL"></div>

        <p class="newsletter-aside-note">
          Topluluğumuza katılın ve en son haberleri, indirimleri ve oyunlarımıza özel teklifleri e-posta kutunuza gönderelim.
        </p>
      </section>
    </section>

    

    <footer class="site-footer">
      <p>
        © 2025 - Fabel Tiyatro.
      </p>
      <div id="wcb" class="carbonbadge wcb-d"></div>
    </footer>
  </main>
</template>

<style scoped lang="postcss">
.page-main {
  @apply relative overflow-hidden bg-black;
}

.hero-section {
  @apply relative z-10 mx-auto flex min-h-[75vh] max-w-6xl flex-col gap-12 px-6 pb-16 pt-24 md:flex-row md:items-start;
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
  @apply mx-auto max-w-5xl  ;
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
  @apply flex h-12 w-12 items-center justify-center  text-white;
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
}

.ml-form-align-center {
  text-align: none;
}

.ml-form-embedContainer .ml-form-embedWrapper.embedForm {
  width: 100% !important;
  max-width: 100% !important;
}
</style>
