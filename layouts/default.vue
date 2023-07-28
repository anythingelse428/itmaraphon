<template>
  <div class="layout --default">

    <NavigationMenu />
    <main class="container">
      <slot />
    </main>
    <footer></footer>
  </div>
</template>


<script lang="ts">
import NavigationMenu from '../components/Navigation/NavigationMenu.vue';
export default {
  components: {
    NavigationMenu
  }
}
</script>
<style lang="scss" scoped>
.layout {
  margin: 0;
  padding: 0;

  &.sticky {
    padding-top: 60px;
  }

  &.--default {
    min-height: 100vh;
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(18, 27, 62, 0.00) 0%, rgba(8, 12, 21, 0.50) 100%), linear-gradient(0deg, #121B3E 0%, #121B3E 100%), #FFF;

    .container {
      width: min(1500px, 95%);
      max-width: 95%;
      margin: 0 auto;
      position: relative;
    
      @media screen and (max-width:1550px) {
        width: min(1200px, 95%);
      }
      @media screen and (max-width:1250px) {
        width: min(992px, 95%);
      }
      @media screen and (max-width:1000px) {
        width: min(780px, 95%);
      }
      @media screen and (max-width:800px) {
        width: 95%;
      }
    }
  }
}</style>