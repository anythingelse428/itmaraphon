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
* {
  transition: all .35s ease-in-out ;
}

.history-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 24px;

  * {
    color: $history-item-color;

  }

  @media screen and (max-width:1350px) {
    align-items: flex-start;

    &__description,
    &__year {
      text-align: start !important;
    }

    &__line {
      justify-content: start !important;

      .--main {
        justify-content: start !important;
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
    &.--current {
      .history-item__step {
        right: 0px;
      }
    }

    .history-item__step {
      right: 1px;
    }

    .history-item__line {
      flex-direction: row-reverse;

      .--main {
        .svg {
          right: 2px;
        }
      }

      .--sub {
        flex-direction: row-reverse;

        .history-item__info {
          text-align: end;
          margin-right: 20px;
          margin-left: 0px;
        }

        .svg {
          right: -2px;
          transform: rotateY(180deg);
        }
      }

      @media screen and (max-width: 1350px) {

        flex-direction: row !important;

        .--main {
          .svg {
            right: -11px;
          }
        }

        .--sub {
          flex-direction: row !important;

          .history-item__info {
            text-align: start;
            margin-right: 0;
            margin-left: 20px;
          }

          .svg {
            right: 0;
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

      @media screen and (max-width: 1350px) {
        right: -4px;
      }

      @media screen and (max-width:550px) {
        right: -3px;
      }
    }

    &.--reversed {
      .history-item__step {
        @media screen and (max-width:550px) {
          width: 8px;
          height: 8px;
        }
      }

      .history-item__line.--main {
        // @media screen and (max-width: 550px) {
        //   right: 2px;
        // }
      }
    }

    .history-item__step {
      width: 16px;
      height: 16px;

      @media screen and (max-width:550px) {
        width: 8px;
        height: 8px;
      }

      &::before {
        background: #7190FF;
        filter: drop-shadow(0px 0px 19px #3562FF);
      }
    }
  }

  &.--current {
    .small-light {
      width: 193px;
      height: 222px;
      position: absolute;
      display: block;
      top: -110px;
      left: -90px;

      &::before {
        position: absolute;
        content: "";
        inset: 0;
        border-radius: 111px 96px;
        background: rgba(86, 144, 255, 0.13);
        filter: blur(75px);
      }
    }

    .big-light {
      width: 287px;
      height: 330px;
      position: relative;

      &::before {
        content: "";
        display: block;
        width: 287px;
        height: 330px;
        position: absolute;
        border-radius: 330px;
        background: rgba(0, 87, 255, 0.17);
        filter: blur(100px);
        bottom: calc(287px / 2 + 42px);
        right: calc(330px / 2 - 42px);
      }
    }

    &:not(.--reversed) {
      .history-item__step {}
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
      z-index: 2;
      inset: 0;
      border-radius: 100%;
      background: #E3F2FF;
      opacity: 1;
      filter: drop-shadow(0px 0px 35px #4A6EF2) drop-shadow(0px 0px 10px #1070C9);
    }

    @media screen and (max-width:1350px) {

      // right: -6px;
    }

    @media screen and (max-width:1000px) {
      // right: -4px;
    }

    @media screen and (max-width:550px) {
      width: 14px;
      height: 14px;
      // left: 3px;
    }
  }

  &__line {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;


    &.--main {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: flex-end;
      width: calc(100% + 1px);

      @media screen and (max-width:1350px) {
        width: 3px;
      }

      .svg {
        display: flex;
        height: 100%;
        position: relative;
        justify-content: center;
        width: 3px;
        content: url('/assets/main-line.svg');
        right: -1px;

        @media screen and (max-width: 1350px) {
          right: -11px;
          height: 100%;
          content: url('/assets/main-line-md.svg');
        }

        @media screen and (max-width: 550px) {
          right: -6px;
          width: 2px;
          content: url('/assets/main-line-sm.svg');
          height: 100%;
        }


      }
    }

    &.--sub {
      position: relative;
      top: 20px;
      z-index: 1;
      display: flex;
      right: 1px;
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
        display: flex;
        position: relative;
        width: 163px;
        height: 70px;
        content: url('/assets/sub-line.svg');

        @media screen and (max-width: 1000px) {
          width: 187px;
          content: url('/assets/sub-line-md.svg');
        }

        @media screen and (max-width: 550px) {
          content: url('/assets/sub-line-sm.svg');
          width: 54px;
          height: 50px;
        }
      }
    }
  }

  &__year {
    text-shadow: 0px 0px 4px rgba(227, 242, 255, 0.35);
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
    width: calc(100% - 20px - 163px);
    position: relative;
    top: 2em;
    margin-left: 20px;

    @media screen and (max-width:550px) {
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      top: 3em;
      width: calc(100% - 20px - 74px);
    }
  }

}
</style>