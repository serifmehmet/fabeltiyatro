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
        },
        {
          id: 'mailerlite-init',
          innerHTML: "(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);};l=d.createElement(e);l.async=1;l.src=u;n=d.getElementsByTagName(e)[0];n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');ml('account','1900168');"
        },
        {
          id: 'meta-pixel-init',
          innerHTML: "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','3396480127188201');fbq('track','PageView');"
        },
        {
          id: 'carbon-badge',
          src: 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js',
          defer: true
        }
      ],
      noscript: [
        {
          id: 'meta-pixel-noscript',
          innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3396480127188201&amp;ev=PageView&amp;noscript=1" />'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtm-init': ['innerHTML'],
        'mailerlite-init': ['innerHTML'],
        'meta-pixel-init': ['innerHTML'],
        'meta-pixel-noscript': ['innerHTML']
      }
    }
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss']
})
