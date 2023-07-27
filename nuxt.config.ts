// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true
    },
    baseURL: '/itmaraphon/'
  },
  app: {
    baseURL: '/itmaraphon/' // baseURL: '/<repository>/'
  },
  devtools: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "public/assets/scss/_colors.scss" as *;'
        }
      }
    }
  }
})
