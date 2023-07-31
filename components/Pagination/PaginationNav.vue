<template>
  <div class="pagination">
    <PaginationBullet v-for="i in pagesQty" :key="i" :order="i - 1" :active="current" />
  </div>
</template>

<script lang="ts" setup>
import PaginationBullet from './PaginationBullet.vue';
const props = defineProps({
  pagesQty: { type: Number, required: true },
  current:{type: Number, default: 0}
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