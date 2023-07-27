// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  mode: 'ssr',
  router: {
    base: '/anythingelse428.github.io'
  },
  app: {
    baseURL: '/anythingelse428.github.io'
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
