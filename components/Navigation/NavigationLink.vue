<template>
  <NuxtLink class="nav-link" :to="link">
    <slot />
  </NuxtLink>
</template>
<script lang="ts" setup>
const props = defineProps({
  link: {
    type: String,
    default: '#'
  },
})
</script>

<style lang="scss" scoped>
.nav-link {
  color: $nav-link-color;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  -webkit-transition: all 200ms !important;
  -o-transition: all 200ms !important;
  -moz-transition: all 200ms !important;
  transition: all 200ms !important;
  cursor: pointer;

  &:hover {
    color: #b7bbc4;
    will-change: color;
  }

  @media screen and (max-width: 1200px) {
    color: $mobile-nav-link-color;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 1100px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 16px;
    font-weight: 400;
  }
}
</style>