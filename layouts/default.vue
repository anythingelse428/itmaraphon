<template>
  <div class="layout --default">
    <NavigationMenu />
    <main class="container">
      <slot />
    </main>
    <footer></footer>
  </div>
</template>


<script lang="ts" setup>
import NavigationMenu from '../components/Navigation/NavigationMenu.vue';
</script>
<style lang="scss" scoped>
.layout {
  margin: 0;
  padding: 0;

  &.--default {
    min-height: 100vh;
    background: -webkit-radial-gradient(50% 50.00%, 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -webkit-gradient(linear, left bottom, left top, from(#121B3E), to(#121B3E)), #FFF;
    background: -moz-radial-gradient(50% 50.00%, 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -webkit-gradient(linear, left bottom, left top, from(#121B3E), to(#121B3E)), #FFF;
    background: -o-radial-gradient(50% 50.00%, 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -webkit-gradient(linear, left bottom, left top, from(#121B3E), to(#121B3E)), #FFF;
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -webkit-gradient(linear, left bottom, left top, from(#121B3E), to(#121B3E)), #FFF;
    background: -webkit-radial-gradient(50% 50.00%, 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -webkit-linear-gradient(bottom, #121B3E 0%, #121B3E 100%), #FFF;
    background: -moz-radial-gradient(50% 50.00%, 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -moz-linear-gradient(bottom, #121B3E 0%, #121B3E 100%), #FFF;
    background: -o-radial-gradient(50% 50.00%, 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), -o-linear-gradient(bottom, #121B3E 0%, #121B3E 100%), #FFF;
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), linear-gradient(0deg, #121B3E 0%, #121B3E 100%), #FFF;

    // fix chrome blinking on scroll
    position: fixed;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-anchor: none;

    @media screen and (min-width: 1000px) {
      &::-webkit-scrollbar {
        width: 8px;
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: -webkit-radial-gradient(50% 50%, 50% 50%, rgba(18, 27, 62, 0) 0%, rgba(8, 12, 21, 0.5) 100%), -webkit-gradient(linear, left bottom, left top, from(#121B3E), to(#121B3E)), #FFF;
        background: radial-gradient(50% 50% at 50% 50%, rgba(18, 27, 62, 0) 0%, rgba(8, 12, 21, 0.5) 100%), -webkit-gradient(linear, left bottom, left top, from(#121B3E), to(#121B3E)), #FFF;
        background: -webkit-radial-gradient(50% 50%, 50% 50%, rgba(18, 27, 62, 0) 0%, rgba(8, 12, 21, 0.5) 100%), -webkit-linear-gradient(bottom, #121B3E 0%, #121B3E 100%), #FFF;
        background: radial-gradient(50% 50% at 50% 50%, rgba(18, 27, 62, 0) 0%, rgba(8, 12, 21, 0.5) 100%), linear-gradient(0deg, #121B3E 0%, #121B3E 100%), #FFF;
      }

      &::-webkit-scrollbar-thumb {
        background: #f1f1f1;
        -webkit-border-radius: 5px;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #a7a7a7;
      }
    }

    .container {
      width: min(1500px, 95%);
      max-width: 95%;
      margin: 0 auto;
      position: relative;

      @media screen and (max-width:1670px) {
        width: min(1200px, 95%);
      }

      @media screen and (max-width:1250px) {
        width: min(992px, 95%);
      }

      @media screen and (max-width:1000px) {
        width: 100%;
        max-width: 100%;
        padding: 0 90px;
      }

      @media screen and (max-width:800px) {
        padding: 0 10px;
      }
    }
  }
}
</style>