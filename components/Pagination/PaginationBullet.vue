<template>
  <div @click="scrollTo(order)" :class="'pagination-bullet' + (isActive ? ' active' : '')"></div>
</template>

<script lang="ts">
export default {
  name: 'PaginationBullet',
  props: {
    order: {
      type: Number,
      required: true
    },
    active: {
      type: Number,
      default: 0
    }
  },
  methods: {
    scrollTo(id: number) {
      const $item: HTMLDivElement = document.querySelector('#page_' + id)!
      const itemHeight = Number($item?.clientHeight)
      const itemY = Number($item?.getBoundingClientRect().y)
      useRouter().replace({ hash: '#page' + this.order })
      if (itemY && itemHeight && $item) {
        window.scrollTo({
          top: ($item?.getBoundingClientRect().y + window.scrollY - (itemHeight / 1.2)),
        })
      }
    },
  },
  computed: {
    isActive(): boolean {
      return this.active === this.order
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-bullet {

  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  cursor: pointer;

  &::before {
    position: relative;
    content: "";
    width: 12px;
    height: 12px;
    display: block;
    z-index: 5;
    border-radius: 100%;
    background: var(--unnamed, #314373);
  }

  &::after {
    inset: 0;
    position: absolute;
    display: block;
    z-index: 4;
    content: "";
    border-radius: 100%;
    background: #1849A0;
    opacity: 0;
    transition: all .25s;
  }

  &.active {
    &::before {
      background: #FCFDFD;
    }

    &::after {
      opacity: 1;
    }

  }
}
</style>