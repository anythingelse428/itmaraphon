export default defineNuxtPlugin({
  name: 'is-page-loaded',
  enforce: 'pre', // or 'post'
  async setup (nuxtApp) {
    // this is the equivalent of a normal functional plugin
  },
  hooks: {
    // You can directly register Nuxt app hooks here
    'page:finish'() {
      console.log('loadede');
      
      return true
    }
  }
})