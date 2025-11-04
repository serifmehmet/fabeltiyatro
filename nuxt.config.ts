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
      link: [{ rel: 'icon', type: 'image/png', href: '/fabellogosiyah.jpg' }],
      script: [
        {
          id: 'gtm-init',
          innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N2L3LGGN');"
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtm-init': ['innerHTML']
      }
    }
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss']
})
