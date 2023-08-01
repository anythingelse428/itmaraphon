<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <div class="loader">
  </div>
</template>
<style lang="scss">
@import url('/assets/fonts/Manrope/style.css');

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 9999;
  inset: 0;
  width: 100vw;
  background: rgb(25, 46, 115);
  background: -moz-radial-gradient(circle, rgba(25, 46, 115, 1) 0%, rgba(17, 27, 61, 1) 100%);
  background: -webkit-radial-gradient(circle, rgba(25, 46, 115, 1) 0%, rgba(17, 27, 61, 1) 100%);
  background: radial-gradient(circle, rgba(25, 46, 115, 1) 0%, rgba(17, 27, 61, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#192e73", endColorstr="#111b3d", GradientType=1);
  opacity: 1;
  transition: opacity 1s ease-out;

  &::before {
    display: block;
    position: relative;
    content: "";
    width: 40px;
    height: 40px;
    background: #fff;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    transform-origin: center center;
    opacity: 1;
    animation: pulse 2s 800ms infinite both;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(1);
    }

    50% {
      opacity: 0.6;
      transform: scale(0.6);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: $text-white;
  font-family: 'Manrope', sans-serif;
  scroll-behavior: smooth;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  a {
    text-decoration: none;
  }
}

body {
  overflow: hidden;
  background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -webkit-gradient(linear, left bottom, left top, from(#121B3E), to(#121B3E)), #FFF;
  background: -webkit-radial-gradient(50% 50.00%, 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -webkit-linear-gradient(bottom, #121B3E 0%, #121B3E 100%), #FFF;
  background: -moz-radial-gradient(50% 50.00%, 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -moz-linear-gradient(bottom, #121B3E 0%, #121B3E 100%), #FFF;
  background: -o-radial-gradient(50% 50.00%, 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -o-linear-gradient(bottom, #121B3E 0%, #121B3E 100%), #FFF;
  background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), linear-gradient(0deg, #121B3E 0%, #121B3E 100%), #FFF;


}
</style>

<script setup lang="ts">
import { defineOrganization, useSchemaOrg } from '@unhead/schema-org';
useNuxtApp().hook("page:finish", () => {
  const $loader: HTMLDivElement = document.querySelector('.loader')!
  const $body = document.querySelector('body')
  if ($loader && $body) {
    $loader.style.transform = 'scale(1.5)'
    $loader.style.opacity = '0'
    $loader?.addEventListener('transitionend', () => {
      $loader.style.display = 'none'
      $body.style.overflow = 'auto'
      setTimeout(() => {
        $loader.removeEventListener('transitionend', () => {
        })
      }, 1000);
    })
  }
});

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
    "@context": "http://www.schema.org",
    "@type": "EducationalOrganization",
    "name": "УАвиаК-МЦК",
    "url": "https://uaviak.ru/",
    "sameAs": [
      "https://vk.com/uaviakmck",
      "https://anythingelse428.github.io/itmaraphon"
    ],
    "description": "ОГАПОУ УАвиаК-МЦК — это современное учебное заведение, в котором качественному обучению способствуют комфортные условия, новейшее оборудование и богатый опыт педагогов.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "пр-т. Созидателей, 13",
      "addressLocality": "Ульяновск",
      "addressRegion": "Ульяновская обл.",
      "postalCode": "432059",
      "addressCountry": "Россия"
    },
    "hasMap": "https://goo.gl/maps/nVxN56EtUkCM4QEU8",
    "openingHours": "Mo, Tu, We, Th, Fr, Sa, Su 07:00-18:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "88422584156"
    }
  })
])

</script>

