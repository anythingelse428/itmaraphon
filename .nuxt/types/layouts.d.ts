import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
<<<<<<< Updated upstream
declare module "C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/nuxt/dist/pages/runtime/composables" {
=======
declare module "C:/stuff/it-maraphon/node_modules/nuxt/dist/pages/runtime/composables" {
>>>>>>> Stashed changes
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}