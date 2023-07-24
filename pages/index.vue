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
    color: var(--text-white, #F2F5FF);
    font-size: 72px;
    font-style: normal;
    font-weight: 400;
    line-height: 115%;
    margin-bottom: 12px;

    @media screen and (max-width:1000px) {
      color: var(--unnamed, #FAFBFF);
      font-size: 54px;
    }

    @media screen and (max-width:550px) {
      font-size: 20px;
      font-weight: 400;
      line-height: 135%;
    }

  }

  &__description {
    color: var(--text-white, #F2F5FF);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    @media screen and (max-width:1000px) {
      color: var(--unnamed, #FAFBFF);
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

}
</style>