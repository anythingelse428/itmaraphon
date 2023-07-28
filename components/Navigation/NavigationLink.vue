<template>
  <NuxtLink class="nav-link" :to="link">
    <slot />
  </NuxtLink>
</template>
<script lang="ts">
export default {
  name: 'NavigationLink',
  props: {
    link: {
      type: String,
      default: '#'
    },
  }
}
</script>

<style lang="scss" scoped>
.nav-link {
  color: $nav-link-color;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  transition: all .1s;
  cursor: pointer;

  &:hover {
    color: #b7bbc4;
  }

  @media screen and (max-width: 1200px) {
    color: $mobile-nav-link-color;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>