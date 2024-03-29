// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content", ],
  colorMode: {
    classSuffix: ''
  },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    head: {
      title: "My Nuxt App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
    content: {
    highlight: {
      // theme: 'github-light',
      theme: {
        default: 'min-light',
        dark: 'min-dark',
        sepia: 'monokai'
      }
    }
  }
})