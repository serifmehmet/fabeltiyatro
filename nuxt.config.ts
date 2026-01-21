import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: "%s | Fabel Tiyatro",
      title: "Fabel Tiyatro",
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Fabel Tiyatro - bağımsız tiyatro topluluğu, prova döneminde. Haberdar olmak için bültenimize katılın.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Fabel Tiyatro" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      script: [
        {
          id: "gtm-init",
          innerHTML:
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N2L3LGGN');",
        },
        {
          id: "mailerlite-init",
          innerHTML:
            "(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);};l=d.createElement(e);l.async=1;l.src=u;n=d.getElementsByTagName(e)[0];n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');ml('account','1900168');",
        },
        {
          id: "meta-pixel-init",
          innerHTML:
            "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','3396480127188201');fbq('track','PageView');",
        },
      ],
      noscript: [
        {
          id: "meta-pixel-noscript",
          innerHTML:
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3396480127188201&amp;ev=PageView&amp;noscript=1" />',
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "gtm-init": ["innerHTML"],
        "mailerlite-init": ["innerHTML"],
        "meta-pixel-init": ["innerHTML"],
        "meta-pixel-noscript": ["innerHTML"],
      },
    },
  },
  css: ["~/assets/css/styles.css"],
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-05-03",
  },
  runtimeConfig: {
    mailerliteKey: process.env.MAILERLITE_API_KEY,
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "react-compiler-runtime": "react-compiler-runtime",
        react: "react",
      },
    },
  },
});
