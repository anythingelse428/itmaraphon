<template>
  <div class="mainpage">
    <div class="hero">
      <h1 class="hero__title">ОГАПОУ «УАвиаК-МЦК»</h1>
      <h2 class="hero__description">
        Областное государственное автономное профессиональное образовательное учреждение «Ульяновский авиационный колледж
        — Межрегиональный центр компетенций»
      </h2>
    </div>
    <HistoryLine />
  </div>
</template>

<script lang="ts" setup>
import HistoryLine from '../components/History/HistoryLine.vue';

</script>

<style lang="scss" scoped>
.hero {
  width: min(810px, 100%);
  margin: 90px 0;

  @media screen and (max-width:1000px) {
    margin-top: 70px;
    margin-bottom: 124px;
  }

  @media screen and (max-width:550px) {
    margin-top: 32px;
    margin-bottom: 39px;
  }

  &__title {
    color: $text-white;
    font-size: 72px;
    font-style: normal;
    font-weight: 400;
    line-height: 115%;
    margin-bottom: 12px;

    @media screen and (max-width:1000px) {
      color: $mobile-text-white;
      font-size: 54px;
    }

    @media screen and (max-width:550px) {
      font-size: 20px;
      font-weight: 400;
      line-height: 135%;
    }

  }

  &__description {
    color: $text-white;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    @media screen and (max-width:1000px) {
      color: $mobile-text-white;
    }

    @media screen and (max-width:550px) {
      font-size: 14px;
      line-height: 155%;
    }
  }
}

.mainpage {
  position: relative;
  display: block;

  * {
    position: relative;
    z-index: 4;
  }

  &::before,
  &::after {
    display: block;
    content: "";
    z-index: 1;
    position: fixed;
    width: 756px;
    height: 784px;
    -webkit-border-radius: 784px;
    border-radius: 784px;
    -webkit-filter: blur(175px);
    filter: blur(175px);
  }

  &::after {
    background: rgba(0, 87, 255, 0.08);
    top: -50%;
    left: 3%;

  }

  &::before {
    top: 50%;
    right: -4%;
    background: rgba(0, 87, 255, 0.15);
  }

  @media screen and (max-width:1000px) {
    &::after {
      width: 534px;
      height: 534px;
      top: -25%;
      left: -23%;
    }

    &::before {
      width: 600px;
      height: 600px;
      top: 70%;
      right: -13%;
    }
  }
}
</style>