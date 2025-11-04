// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Fabel Tiyatro',
      meta: [
        { name: 'description', content: 'Fabel Tiyatro - bağımsız tiyatro topluluğu, prova döneminde. Haberdar olmak için bültenimize katılın.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/fabellogosiyah.jpg' }]
    }
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss']
})
