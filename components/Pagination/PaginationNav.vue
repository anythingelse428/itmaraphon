<template>
  <div class="pagination">
    <PaginationBullet v-for="i in pagesQty" :key="i" :order="i - 1" :active="current" />
  </div>
</template>

<script lang="ts" setup>
import PaginationBullet from './PaginationBullet.vue';
import { ref } from 'vue'
const props = defineProps({
  pagesQty: { type: Number, required: true },
})
const current = ref(Number(useRoute().hash.replace('#page', '')))
onBeforeRouteUpdate((newRoute) => {
    current.value = Number(newRoute.hash.replace('#page', ''))
})

</script>

<style lang="scss" scoped>
.pagination {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
     -moz-box-orient: vertical;
     -moz-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 24px;
}
</style>