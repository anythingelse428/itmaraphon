<template>
  <section
    :class="(isCurrent ? '--current' : '--muted') + (isReversed && isDesktop ? ' --reversed' : '') + ' history-item'">
    <div class="history-item__header">
      <div class="history-item__year">
        {{ year }}
      </div>
      <div class="history-item__description">
        {{ shortDescripton }}
      </div>
    </div>
    <div class="history-item__step" ref="start">
      <div class="small-light"></div>
      <div class="big-light"></div>

    </div>
    <div class="history-item__line">
      <div class="history-item__line --main">
        <div class="svg"></div>
      </div>

      <div class="history-item__line --sub">
        <div class="svg">
        </div>
        <div class="history-item__info">
          {{ info }}
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  name: 'HistoryItem',
  props: {
    year: {
      type: Number,
      requred: true
    },
    shortDescripton: {
      type: String,
      requred: true
    },
    info: {
      type: String,
      requred: true
    },
    currentArea: {
      type: Number,
      default: 1985
    },
    isReversed: {
      type: Boolean,
      requred: true
    }
  },
  data() {
    return {
      itemHeight: 0,
      isDesktop: true
    }
  },
  mounted() {
    this.isDesktop = window.innerWidth > 1350
    addEventListener('resize', () => {
      this.isDesktop = window.innerWidth > 1350
    })
  },
  computed: {
    isCurrent() {
      return this.currentArea == this.year
    },
  }
}
</script>

<style lang="scss" scoped>
.history-item {
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
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  margin-bottom: 24px;

  * {
    -webkit-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    -moz-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    color: $history-item-color;
    position: relative;
    z-index: 4;
  }

  @media screen and (max-width:1350px) {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -moz-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;

    &__description,
    &__year {
      text-align: start !important;
    }

    &__line {
      -webkit-box-pack: start !important;
      -webkit-justify-content: start !important;
      -moz-box-pack: start !important;
      -ms-flex-pack: start !important;
      justify-content: start !important;

      .--main {
        -webkit-box-pack: start !important;
        -webkit-justify-content: start !important;
        -moz-box-pack: start !important;
        -ms-flex-pack: start !important;
        justify-content: start !important;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
      }
    }
  }

  @media screen and (max-width:1000px) {
    .history-item__line.--sub {
      max-width: 94%;
    }
  }

  &.--reversed {
    .history-item__step {
      right: 1px;
    }

    .history-item__line {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -webkit-flex-direction: row-reverse;
      -moz-box-orient: horizontal;
      -moz-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;

      .--main {
        .svg {
          right: 2px;
        }
      }

      .--sub {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -webkit-flex-direction: row-reverse;
        -moz-box-orient: horizontal;
        -moz-box-direction: reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;

        .history-item__info {
          text-align: end;
          margin-right: 20px;
          margin-left: 0px;
        }

        .svg {
          right: -2px;
          -webkit-transform: rotateY(180deg);
          -moz-transform: rotateY(180deg);
          transform: rotateY(180deg);
          will-change: transform;
        }
      }

      @media screen and (max-width: 1350px) {

        -webkit-box-orient: horizontal !important;

        -webkit-box-direction: normal !important;

        -webkit-flex-direction: row !important;

        -moz-box-orient: horizontal !important;

        -moz-box-direction: normal !important;

        -ms-flex-direction: row !important;

        flex-direction: row !important;

        .--main {
          .svg {
            right: -11px;
          }
        }

        .--sub {
          -webkit-box-orient: horizontal !important;
          -webkit-box-direction: normal !important;
          -webkit-flex-direction: row !important;
          -moz-box-orient: horizontal !important;
          -moz-box-direction: normal !important;
          -ms-flex-direction: row !important;
          flex-direction: row !important;

          .history-item__info {
            text-align: start;
            margin-right: 0;
            margin-left: 20px;
          }

          .svg {
            right: 0;
            -webkit-transform: rotateY(0deg);
            -moz-transform: rotateY(0deg);
            transform: rotateY(0deg);
          }
        }
      }
    }
  }

  &.--muted {
    * {
      color: var(--unnamed, #6176AD);
    }

    .history-item__step {
      top: 3px;
      width: 16px;
      height: 16px;
      will-change: width, height, top;

      &::before {
        background: #7190FF;
        -webkit-filter: drop-shadow(0px 0px 19px #3562FF);
        filter: drop-shadow(0px 0px 19px #3562FF);
      }

      @media screen and (max-width: 1350px) {
        right: -4px;
      }

      @media screen and (max-width:550px) {
        right: -3px;
        width: 8px;
        height: 8px;
      }
    }

    &.--reversed {
      .history-item__step {
        @media screen and (max-width:550px) {
          width: 8px;
          height: 8px;
        }
      }

    }

  }

  .small-light {
    width: 193px;
    height: 222px;
    position: absolute;
    display: block;
    top: -110px;
    left: -90px;
    z-index: 2;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    will-change: transform;

    @media screen and (max-width:1000px) {
      width: 195px;
      height: 225px;
      top: -160px;
      left: -34px;
    }

    @media screen and (max-width:550px) {
      width: 81px;
      height: 94px;
      top: -42px;
      left: -32px;
    }

    &::before {
      z-index: 2;
      position: absolute;
      content: "";
      inset: 0;
      -webkit-border-radius: 111px 96px;
      border-radius: 111px 96px;
      background: rgba(86, 144, 255, 0.13);
      -webkit-filter: blur(75px);
      filter: blur(75px);
    }

  }

  .big-light {
    width: 287px;
    height: 330px;
    position: relative;
    top: -142px;
    left: -133px;
    display: block;
    z-index: 2;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    will-change: transform;

    @media screen and (max-width:1000px) {
      width: 291px;
      height: 335px;
      top: -240px;
      left: -50px;
    }

    @media screen and (max-width:550px) {
      width: 121px;
      height: 139px;
      top: -60px;
      left: -50px;
    }

    &::before {
      position: absolute;
      content: "";
      z-index: 2;
      display: block;
      inset: 0;
      -webkit-border-radius: 330px;
      border-radius: 330px;
      background: rgba(0, 87, 255, 0.17);
      -webkit-filter: blur(100px);
      filter: blur(100px);

    }
  }

  &.--current {
    .history-item__year {
      text-shadow: 0px 0px 4px rgba(227, 242, 255, 0.35);
    }

    .big-light,
    .small-light {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
      will-change: transform;

    }
  }

  &__header {
    margin-bottom: 32px;

    @media screen and (max-width:1000px) {
      margin-bottom: 24px;
    }

    @media screen and (max-width:550px) {
      margin-bottom: 15px;
    }
  }

  &__step {
    display: block;
    position: relative;
    width: 24px;
    height: 24px;
    right: 0;
    top: 2px;
    z-index: 5;

    &::before {
      position: absolute;
      content: '';
      z-index: 5;
      inset: 0;
      -webkit-border-radius: 100%;
      border-radius: 100%;
      background: #E3F2FF;
      -webkit-filter: drop-shadow(0px 0px 35px #4A6EF2) drop-shadow(0px 0px 10px #1070C9);
      filter: drop-shadow(0px 0px 35px #4A6EF2) drop-shadow(0px 0px 10px #1070C9);
      will-change: background, filter;
    }

    @media screen and (max-width:550px) {
      width: 14px;
      height: 14px;
    }
  }

  &__line {
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    &.--main {
      position: relative;
      z-index: 2;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -moz-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      width: -webkit-calc(100% + 1px);
      width: -moz-calc(100% + 1px);
      width: calc(100% + 1px);

      @media screen and (max-width:1350px) {
        width: 3px;
      }

      .svg {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        position: relative;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 3px;
        content: url('~/assets/main-line.svg');
        right: -1px;

        @media screen and (max-width: 1350px) {
          right: -11px;
          height: 100%;
        }

        @media screen and (max-width: 550px) {
          right: -6px;
          width: 2px;
          content: url('~/assets/main-line-sm.svg');
          height: 100%;
        }
      }
    }

    &.--sub {
      position: relative;
      top: 20px;
      z-index: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      right: 1px;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -moz-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      max-width: 50%;
      min-width: 578px;

      @media screen and (max-width:1350px) {
        left: 9px;
      }

      @media screen and (max-width:1000px) {
        min-width: inherit;
        left: 8px;
      }

      @media screen and (max-width:550px) {
        min-width: inherit;
        left: 3px;
      }

      .svg {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;
        width: 163px;
        height: 70px;
        content: url('~/assets/sub-line.svg');

        @media screen and (max-width: 1000px) {
          width: 187px;
          content: url('~/assets/sub-line-md.svg');
        }

        @media screen and (max-width: 550px) {
          content: url('~/assets/sub-line-sm.svg');
          width: 54px;
          height: 50px;
        }
      }
    }
  }

  &__year {
    font-size: 46px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px;
    text-align: center;

    @media screen and (max-width:1000px) {
      font-size: 40px;
      font-weight: 400;
      line-height: 135%;
    }

    @media screen and (max-width:550px) {
      font-size: 16px;
      text-shadow: none;
    }
  }

  &__description {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    font-style: normal;

    @media screen and (max-width:1000px) {
      font-size: 20px;
      line-height: 30px;
    }

    @media screen and (max-width:550px) {
      font-size: 14px;
      font-weight: 400;
      line-height: 155%;
    }
  }

  &__info {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: -webkit-calc(100% - 20px - 163px);
    width: -moz-calc(100% - 20px - 163px);
    width: calc(100% - 20px - 163px);
    position: relative;
    top: 2em;
    margin-left: 20px;

    @media screen and (max-width:550px) {
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      top: 3em;
      width: -webkit-calc(100% - 20px - 74px);
      width: -moz-calc(100% - 20px - 74px);
      width: calc(100% - 20px - 74px);
    }
  }

}
</style>