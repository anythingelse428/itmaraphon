// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL: process.env.MODE === 'DEV' ? '/' : '/itmaraphon/',// baseURL: '/<repository>/'
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title:'УавиаК-МЦК',
      link:[
        {rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png'},
        {rel: 'icon', type:"image/png", sizes: "32x32", href: '/favicon-32x32.png'},
        {rel: 'icon', type:"image/png", sizes: "16x16", href: '/favicon-16x16.png'},
        {rel: 'manifest', href: '/site.webmanifest'},
        {rel: 'mask-icon', color: "#5bbad5", href: '/safari-pinned-tab.svg'},
      ],
      noscript: [
        { children: 'JavaScript в вашем браузере отключен, пожалуйста, включите JavaScript или зайдите через другой браузер' }
      ],
      meta:[
        {name:'keywords', content:'УавиаК-МЦК,колледж,УАвиаК,техникум'},
        {name:'description', content:'Сайт УавиаК-МЦК'},
        {name:'robots', content:'all'},
        {"http-equiv":'content-type', content:'text/html; charset=UTF-8'},
        {name:"msapplication-TileColor", content:'#2b5797'},
        {name:'theme-color', content:'#ffffff'}
      ]
    } 
  },
  devtools: { enabled: false },
  vite: {
    plugins:[
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "public/assets/scss/_colors.scss" as *;'
        }
      }
    }
  }

})
