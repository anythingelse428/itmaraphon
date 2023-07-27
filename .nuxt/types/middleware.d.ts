import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
<<<<<<< Updated upstream
declare module "C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/nuxt/dist/pages/runtime/composables" {
=======
declare module "C:/stuff/it-maraphon/node_modules/nuxt/dist/pages/runtime/composables" {
>>>>>>> Stashed changes
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}