<script setup lang="ts">
import { computed, ref } from 'vue'
import logoImage from '~/assets/images/fabellogosiyah.jpg'

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
    href: 'https://chat.whatsapp.com/',
    description: 'WhatsApp topluluğumuza katılın'
  }
]

const rehearsalFocus = [
  {
    title: 'Yeni oyun geliştirme',
    detail: 'Metin atölyeleri ile hikayemizi birlikte kuruyoruz.'
  },
  {
    title: 'Beden ve ses çalışmaları',
    detail: 'Boş sahneye ihtiyaç duymadan oyuncuların potansiyelini artırıyoruz.'
  },
  {
    title: 'Şehir içi pop-up gösterimler',
    detail: 'Mekân sponsorlukları ve misafirliklerle seyirciyle buluşmayı planlıyoruz.'
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
  <main class="relative overflow-hidden">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(241,196,15,0.18),_rgba(7,7,7,0.9))]"
    />

    <section class="relative z-10 mx-auto flex min-h-[75vh] max-w-6xl flex-col gap-12 px-6 pb-16 pt-24 md:flex-row md:items-center">
      <div class="flex-1 space-y-8">
        <div class="flex items-center gap-4">
          <img
            :src="logoImage"
            alt="Fabel Tiyatro logosu"
            class="h-24 w-24 rounded-full border border-white/10 object-cover"
          />
          <div>
            <p class="uppercase tracking-[0.35em] text-white/60">Fabel Tiyatro</p>
            <h1 class="text-4xl font-semibold leading-tight sm:text-5xl">Sahnesiz tiyatro, hikayesi bol topluluk.</h1>
          </div>
        </div>
        <p class="max-w-xl text-lg text-white/80">
          Şu an yoğun bir prova dönemindeyiz. Hikayemizi güçlendiriyor, yeni mekânlar arıyor ve seyircimizle buluşmak için
          sabırsızlanıyoruz. Bültenimize katılın; ilk sahneye çıktığımızda haberdar olun.
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-3">
          <label class="block text-sm font-medium text-white/70" for="email">E-bültenimize katılın</label>
          <div class="flex flex-col gap-3 sm:flex-row">
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              required
              placeholder="ornek@eposta.com"
              class="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/60"
            />
            <button
              type="submit"
              class="rounded-md bg-accent px-5 py-3 text-base font-semibold text-night transition hover:bg-yellow-400 hover:shadow-[0_12px_24px_rgba(241,196,15,0.25)] focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-night"
            >
              Beni haberdar et
            </button>
          </div>
          <p v-if="submitState === 'success'" class="text-sm text-accent/90">
            {{ successMessage }}
          </p>
          <p v-else-if="submitState === 'error'" class="text-sm text-red-400">
            {{ errorMessage }}
          </p>
          <p v-else class="text-xs text-white/50">
            E-postanızı yalnızca prova ve gösteri haberleri için kullanacağız.
          </p>
        </form>

        <div class="flex flex-wrap items-center gap-5 text-sm text-white/70">
          <div class="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-white/60">
            <span class="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Prova dönemi sürüyor
          </div>
          <p class="text-white/60">
            İlk gösterim hedefi: <span class="font-medium text-white">2025 sonbahar</span>
          </p>
        </div>
      </div>

      <aside class="flex-1 space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
        <h2 class="text-2xl font-semibold">Repertuvarımızı nasıl kuruyoruz?</h2>
        <ul class="space-y-6">
          <li v-for="item in rehearsalFocus" :key="item.title" class="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <h3 class="text-lg font-medium text-accent">{{ item.title }}</h3>
            <p class="mt-1 text-sm text-white/70">
              {{ item.detail }}
            </p>
          </li>
        </ul>
        <p class="text-sm text-white/60">
          Mevcut mekânsızlığımız yaratıcılığımızı tetikliyor. Pop-up sahneler, başka topluluklarla ortak projeler ve
          kentin beklenmedik köşelerinde performanslar için planlarımız var.
        </p>
      </aside>
    </section>

    <section class="relative z-10 border-t border-white/5 bg-white/[0.02] py-16">
      <div class="mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div class="max-w-xl space-y-3">
          <h2 class="text-2xl font-semibold">Topluluğa katılın</h2>
          <p class="text-sm text-white/70">
            Provalardan haber, gönüllü çağrıları ve beklediğiniz gösteri duyuruları sosyal kanallarımızda.
          </p>
        </div>
        <div class="flex flex-wrap gap-4">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="group flex min-w-[180px] flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left transition hover:border-accent/80 hover:bg-accent/10"
          >
            <span class="text-sm font-semibold text-white">{{ link.name }}</span>
            <span class="text-xs text-white/60">{{ link.description }}</span>
          </a>
        </div>
      </div>
    </section>

    <footer class="relative z-10 border-t border-white/5 py-10 text-center text-xs text-white/50">
      <p>
        © {{ new Date().getFullYear() }} Fabel Tiyatro. Mekân olmadan da üretilebileceğine inanıyoruz.
      </p>
    </footer>
  </main>
</template>
