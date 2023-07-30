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
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>