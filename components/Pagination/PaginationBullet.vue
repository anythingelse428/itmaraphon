<template>
  <div @click="scrollTo(order)" :class="'pagination-bullet' + (isActive ? ' active' : '')"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  order: {
    type: Number,
    required: true
  },
  active: {
    type: Number,
    default: 0
  }
})

function scrollTo(id: number) {
  const $item: HTMLDivElement = document.querySelector('#page_' + id)!
  const itemHeight = Number($item?.clientHeight)
  const itemY = Number($item?.getBoundingClientRect().y)
  if (itemY && itemHeight && $item) {
    $item.style.scrollMarginTop = itemHeight / 1.5 + 'px'
    $item.scrollIntoView({ block: "start", behavior: "smooth" })
  }
}
const isActive = computed({
  get(): boolean {
    return props.active === props.order
  },
  set(): boolean {
    return props.active === props.order
  }
})

</script>

<style lang="scss" scoped>
.pagination-bullet {
  width: 24px;
  height: 24px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  background: transparent;

  &::before {
    position: relative;
    content: "";
    width: 12px;
    height: 12px;
    display: block;
    z-index: 5;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    background: #314373;
  }

  &.active {
    background: #1849A0;

    &::before {
      background: #FCFDFD;
    }

  }
}
</style>