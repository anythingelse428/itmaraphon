<template>
  <nav class="nav" ref="nav">
    <div class="nav-brand">
      <img src="/assets/logo.svg" width="103" height="60" alt="УавиаК-МЦК" srcset="">
    </div>
    <div class="nav-collapse" :class="isOpened && 'active'">
      <div class="nav-links">
        <NavigationLink>О колледже</NavigationLink>
        <NavigationLink>Абитуриентам</NavigationLink>
        <NavigationLink>Студентам</NavigationLink>
        <NavigationLink>Преподавателям</NavigationLink>
        <NavigationLink>Трудоустройство</NavigationLink>
        <NavigationLink>Автошкола</NavigationLink>
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
<script lang="ts" setup>
import NavigationLink from './NavigationLink.vue'
const isOpened = ref(false)
</script>

<style lang="scss" scoped>
.nav {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 15px 65px;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  position: -webkit-sticky;

  * {
    position: relative;
    z-index: 4;
    -webkit-transition: all .35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    -o-transition: all .35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    -moz-transition: all .35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: all .35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &-toggler {
    display: none;
    cursor: pointer;
    width: 54px;
    height: 54px;
    position: relative;

    &::before {
      position: absolute;
      inset: 0;
      display: block;
      content: '';
      background-repeat: round;
      background-image: url('/assets/icons/burger.svg');
    }

    &.active {
      &::before {
        background-image: url('/assets/icons/x.svg');
      }
    }
  }

  @media screen and (max-width:1000px) {
    padding: 15px 90px 15px 90px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    &-toggler {
      display: block;
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

      &>.nav-links {
        position: relative;
        inset: 0;
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
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -moz-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
        align-content: flex-start;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -moz-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        gap: 42px 25%;
        height: 14em;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      &:not(.active) {
        margin-top: -222vh;
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
    &-collapse>&-links {
      gap: 24px 5%;
    }

    &-toggler {
      width: 21px;
      height: 16px;

      &::before {
        width: 21px;
        height: 16px;
      }
    }

    &-brand {
      img {
        width: 48px;
        height: 28px;
      }
    }
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
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 64px;

    @media screen and (max-width:1550px) {
      gap: 32px;
    }

    @media screen and (max-width: 1350px) {
      gap: 18px;
    }

  }

  &-tools {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
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