<script setup lang="ts">
import { computed, ref } from 'vue'
import logoImage from '~/assets/images/fabel_tiyatro_logo.png'

type SubmitState = 'idle' | 'success' | 'error'

const email = ref('')
const submitState = ref<SubmitState>('idle')
const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/fabeltiyatro',
    description: 'Provalardan kareler ve duyurular'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/fabeltiyatro',
    description: 'Topluluğumuzdan uzun hikayeler'
  },
  {
    name: 'WhatsApp',
    href: 'https://chat.whatsapp.com/D6bhDXuecjE8b94yGHBmfp?mode=wwt',
    description: 'WhatsApp topluluğumuza katılın'
  }
]

const newsletterHighlights = [
  {
    title: 'Prova notları ve sahne planları',
    detail: 'Her ay provalardan kısa notları ve sıradaki çalışma hedeflerimizi paylaşıyoruz.'
  },
  
  {
    title: 'Seyirciye özel davetler',
    detail: 'Kapalı devre gösterimlere, okumalarımıza ve çevrim içi söyleşilere ilk siz davet alırsınız.'
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

        <div class="status-info">
          <div class="status-pill">
            <span class="status-dot" />
            Prova dönemi sürüyor
          </div>
          <p class="status-timeline">
            İlk gösterim hedefi: <span class="status-highlight">2025 sonbahar</span>
          </p>
        </div>
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
        <form @submit.prevent="handleSubmit" class="newsletter-form">
          <label class="newsletter-label" for="email">E-bültenimize katılın</label>
          <div class="newsletter-fields">
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              required
              placeholder="ornek@eposta.com"
              class="newsletter-input"
            />
            <button
              type="submit"
              class="newsletter-button"
            >
              Beni haberdar et
            </button>
          </div>
          <p v-if="submitState === 'success'" class="newsletter-success">
            {{ successMessage }}
          </p>
          <p v-else-if="submitState === 'error'" class="newsletter-error">
            {{ errorMessage }}
          </p>
          <p v-else class="newsletter-note">
            E-postanızı yalnızca prova ve gösteri haberleri için kullanacağız.
          </p>
        </form>
        <p class="newsletter-aside-note">
          Yazdığımız her e-posta tiyatro üretimimizin perde arkasına açılan küçük bir pencere. Topluluğumuza katıldığınızda bu
          süreçleri birlikte şekillendiriyoruz.
        </p>
      </section>
    </section>

    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-text">
          <h2 class="cta-heading">Topluluğa katılın</h2>
          <p class="cta-description">
            Provalardan haber, gönüllü çağrıları ve beklediğiniz gösteri duyuruları sosyal kanallarımızda.
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
            <span class="cta-link-name">{{ link.name }}</span>
            <span class="cta-link-description">{{ link.description }}</span>
          </a>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <p>
        © {{ new Date().getFullYear() }} Fabel Tiyatro. Mekân olmadan da üretilebileceğine inanıyoruz.
      </p>
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
  @apply flex-1 space-y-8;
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

.status-info {
  @apply flex flex-wrap items-center gap-5 text-sm text-white/70;
}

.status-pill {
  @apply flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-white/60;
}

.status-dot {
  @apply inline-flex h-2 w-2 rounded-full bg-emerald-400;
}

.status-timeline {
  @apply text-white/60;
}

.status-highlight {
  @apply font-medium text-white;
}

.newsletter-aside {
  @apply flex-1 space-y-8 rounded-3xl border border-white/10 p-8 backdrop-blur;
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
  @apply relative z-10 border-t border-white/5 py-16;
  background-color: rgba(255, 255, 255, 0.02);
}

.cta-container {
  @apply mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between;
}

.cta-text {
  @apply max-w-xl space-y-3;
}

.cta-heading {
  @apply text-2xl font-semibold;
}

.cta-description {
  @apply text-sm text-white/70;
}

.cta-links {
  @apply flex flex-wrap gap-4;
}

.cta-link {
  @apply flex flex-col gap-1 rounded-xl border border-white/10 px-4 py-3 text-left transition hover:border-accent/80 hover:bg-accent/10;
  background-color: rgba(255, 255, 255, 0.04);
  min-width: 180px;
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
</style>
