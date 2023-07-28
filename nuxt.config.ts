// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.MODE === 'DEV' ? '/' : '/itmaraphon/',// baseURL: '/<repository>/'
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title:'УавиаК-МЦК',
      noscript: [
        { children: 'JavaScript в вашем браузере отключен, пожалуйста, включите JavaScript или зайдите через другой браузер' }
      ],
      meta:[
        {name:'keywords', content:'УавиаК-МЦК,колледж,УАвиаК,техникум'},
        {name:'description', content:'Сайт УавиаК-МЦК'},
        {name:'robots', content:'all'},
        {"http-equiv":'content-type', content:'text/html; charset=UTF-8'}
      ]
    } 
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
