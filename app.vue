<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&display=swap');

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

body,
html {
  // overflow-x: hidden;
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
