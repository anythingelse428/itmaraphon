// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.MODE === 'DEV' ? '/' : '/itmaraphon/' // baseURL: '/<repository>/'
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
