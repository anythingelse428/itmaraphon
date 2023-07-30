<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: $text-white;
  font-family: 'Manrope', sans-serif;
  scroll-behavior: smooth;

  a {
    text-decoration: none;
  }
}


body {
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: radial-gradient(50% 50% at 50% 50%, rgba(18, 27, 62, 0) 0%, rgba(8, 12, 21, 0.5) 100%), linear-gradient(0deg, #121B3E 0%, #121B3E 100%), #FFF;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #dadada;
    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #a7a7a7;
  }
}
</style>

<script setup lang="ts">
import {
  useSchemaOrg, defineOrganization,
} from '@unhead/schema-org'

useSeoMeta({
  title: 'УавиаК-МЦК',
  ogTitle: 'ОГАПОУ «УАвиаК-МЦК»',
  ogImageAlt: 'УавиаК-МЦК',
  ogLocale: 'ru',
  description: 'Официальный сайт ОГАПОУ «УАвиаК-МЦК»',
  ogDescription: 'УАвиаК-МЦК — это современное учебное заведение, в котором качественному обучению способствуют комфортные условия, новейшее оборудование и богатый опыт педагогов.',
})
useHead({
  htmlAttrs: {
    lang: 'ru',
  }
})
useSchemaOrg([
  defineOrganization({
    name: 'УавиаК-МЦК',
    logo: '/logo.svg',
    description: 'УАвиаК-МЦК — это современное учебное заведение, в котором качественному обучению способствуют комфортные условия, новейшее оборудование и богатый опыт педагогов.',
    sameAs: [
      'https://vk.com/uaviakmck'
    ]
  }),

])

</script>
