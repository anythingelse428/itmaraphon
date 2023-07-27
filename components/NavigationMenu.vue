<template>
  <nav class="nav" ref="nav">
    <div class="nav-brand">
      <img src="/assets/logo.svg" width="103" height="60" alt="УавиаК-МЦК" srcset="">
    </div>
    <div class="nav-collapse" :class="isOpened && 'active'">
      <div class="nav-links">
        <div class="nav-link">О колледже</div>
        <div class="nav-link">Абитуриентам</div>
        <div class="nav-link">Студентам</div>
        <div class="nav-link">Преподавателям</div>
        <div class="nav-link">Трудоустройство</div>
        <div class="nav-link">Автошкола</div>
      </div>
    </div>
    <div class="nav-tools">
      <div class="nav-tool">
        <img src="/assets/icons/search.svg" alt="Поиск" width="18" height="18" />
      </div>
      <div class="nav-tool">
        <img src="/assets/icons/blind.svg" alt="Версия для слабовидящих" width="26" height="18" />
      </div>
      <div class="nav-toggler" :class="isOpened && 'active'" @click="isOpened = !isOpened"></div>
    </div>
  </nav>
</template>
<script lang="ts">
export default {
  name: 'NavigationMenu',
  data() {
    return {
      isOpened: false
    }
  },
  methods: {
    doSticky() {
      const $nav: HTMLDivElement = this.$refs.nav
      if (window.scrollY >= $nav.offsetTop) {
        $nav.classList.add("sticky")
        $nav.parentElement?.classList.add('sticky')
      } else {
        $nav.classList.remove("sticky");
      }

    }
  },
  mounted() {
    this.doSticky()
  }
}
</script>

<style lang="scss" scoped>
.nav {
  background: rgba(17, 25, 56, 0.01);
  backdrop-filter: blur(3.5px);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 65px;
  flex-wrap: nowrap;

  * {
    position: relative;
    z-index: 4;
    transition: all .5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &-toggler {
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width:1000px) {
    padding: 15px 90px 15px 90px;
    justify-content: space-between;
    &-toggler {
      display: block;
      width: 54px;
      height: 54px;


      &::after {
        position: absolute;
        inset: 0;
        opacity: 1;
        display: block;
        content: url('/assets/icons/burger.svg');
      }

      &::before {
        position: absolute;
        inset: 0;
        opacity: 0;
        display: block;
        content: url('/assets/icons/x.svg');
      }

      &.active {
        &::after {
          opacity: 0;
        }

        &::before {
          opacity: 1;
        }
      }
    }

    &-tool {
      display: none;
    }

    &-collapse {
      display: block;
      position: absolute;
      inset: 0;
      height: 111vh;
      padding: 165px 99px;
      padding-bottom: 0;
      background: #121B3E;
      &:not(.active) {
        margin-top: -150vh;
      }
    }

    &-collapse.active>&-links {
      position: relative;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: flex-start;
      gap: 42px 25%;
      height: 14em;
      flex-wrap: wrap;

      .nav-link {
        color: $mobile-nav-link-color;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }

  }

  @media screen and (max-width:800px) {
    padding: 11px 10px;

    &-collapse {
      padding: 110px 12px;
    }
  }

  @media screen and (max-width:550px) {
    &-collapse.active>&-links {
      gap: 24px 5%;
    }
  }

  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 500;
  }

  &-brand {
    margin-right: 87px;
    position: relative;
    z-index: 7;

    @media screen and (max-width:1550px) {
      margin-right: 25px;
    }
  }

  &-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 64px;

    @media screen and (max-width:1550px) {
      gap: 32px;
    }

    @media screen and (max-width: 1350px) {
      gap: 18px;
    }

  }

  &-link {
    color: $nav-link-color;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    transition: all .1s;
    cursor: pointer;
    &:hover{
      color: #b7bbc4;
    }
    @media screen and (max-width: 1200px) {
      color: $mobile-nav-link-color;
      font-size: 16px;
      line-height: 24px;
    }

  }

  &-tools {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 35px;
    margin-left: auto;
    z-index: 7;
    position: relative;

    @media screen and (max-width:1550px) {
      gap: 32px;
    }

    @media screen and (max-width: 1350px) {
      gap: 20px;
    }
  }
}
</style>