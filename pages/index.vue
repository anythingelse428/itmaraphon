<template>
  <div class="mainpage">
    <div class="hero">
      <h1 class="hero__title">ОГАПОУ «УАвиаК-МЦК»</h1>
      <div class="hero__description">
        Областное государственное автономное профессиональное образовательное учреждение «Ульяновский авиационный колледж
        — Межрегиональный центр компетенций»
      </div>
    </div>
    <HistoryLine />

  </div>
</template>

<script lang="ts">
import HistoryLine from '../components/History/HistoryLine.vue';
export default {
  name: "MainPage",
  components: { HistoryLine }
}
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

  &::before,
  &::after {
    display: block;
    content: "";
    z-index: 1;
    position: fixed;
    width: 756px;
    height: 784px;
    border-radius: 784px;
    filter: blur(175px);

  }

  &::after {
    background: rgba(0, 87, 255, 0.08);
    top: -330px;
    left: 90px;
  }

  &::before {
    top: 420px;
    right: -90px;
    background: rgba(0, 87, 255, 0.15);
  }
}
</style>