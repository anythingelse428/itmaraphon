<template>
  <div :class="(isCurrent ? '--current' : '--muted') + (isReversed ? ' --reversed' : '') + ' history-item'">
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
    <div :class="'history-item__line' + (isReversed ? ' --reversed' : '')">
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
  </div>
</template>
<script>
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
      itemHeight: 0
    }
  },
  computed: {
    isCurrent() {
      return this.currentArea == this.year
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.history-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--unnamed, #ECF1FF);
  position: relative;
  margin-bottom: 24px;

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

      &.--reversed {
        flex-direction: row !important;

        .--sub {
          flex-direction: row !important;

          .history-item__info {
            text-align: start;
            margin-right: 0;
            margin-left: 20px;
          }

          .svg {
            transform: rotateY(0deg);
          }
        }
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
      @media screen and (max-width:1350px) {
        right: 0px;
      }

      @media screen and (max-width:1000px) {
        right: -.9px;
      }
    }

    &.--muted {
      .history-item__step {
        right: -.5px;
        top: 2px;

        @media screen and (max-width:1350px) {
          right: -4px;
        }

        @media screen and (max-width:1000px) {
          right: -4.6px;
        }
      }
    }
  }

  &.--muted {
    * {

      color: var(--unnamed, #6176AD);
    }

    .history-item__step {
      width: 16px;
      height: 16px;

      @media screen and (max-width:550px) {
        width: 9px;
        height: 9px;
        left: 8px;
      }

      &::after {
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

      &::after {
        position: absolute;
        content: "";
        inset: 0;
        border-radius: 100%;
        background: rgba(86, 144, 255, 0.13);
        filter: blur(75px);
      }
    }

    .big-light {
      width: 287px;
      height: 330px;
      position: relative;

      &::after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 330px;
        background: rgba(0, 87, 255, 0.17);
        filter: blur(100px);
        bottom: calc(287px / 2 + 42px);
        right: calc(330px / 2 - 42px);
      }
    }

    &:not(.--reversed) {
      .history-item__step {
        @media screen and (max-width:1350px) {
          right: -1px;
        }

        @media screen and (max-width:1000px) {
          right: 0;
        }
      }
    }
  }

  &__header {
    margin-bottom: 32px;
  }



  &__step {
    display: block;
    position: relative;
    width: 24px;
    height: 24px;
    right: 1px;
    top: 1px;
    z-index: 5;

    &::after {
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

      right: -4.5px;
    }

    @media screen and (max-width:1000px) {
      right: -4px;
    }

    @media screen and (max-width:550px) {
      width: 14px;
      height: 14px;
      left: 5px;
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

      .svg {
        display: flex;
        height: 100%;
        position: relative;
        justify-content: center;
        width: 3px;
        @media screen and (max-width: 1350px) {
          right: -11px;
          height: 100%;
        }
        @media screen and (max-width: 550px) {
          height: 100%;
        }

        &::after {
          display: block;
          position: relative;
          height: 100%;
          content: url('/assets/main-line.svg');
          background-repeat: no-repeat;

          @media screen and (max-width: 1000px) {
            content: url('/assets/main-line-md.svg');
          }

          @media screen and (max-width: 550px) {
            content: url('/assets/main-line-sm.svg');
          }
        }
      }
    }

    &.--sub {
      position: relative;
      top: 20px;
      z-index: 1;
      display: flex;
      right: 2px;
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



      .svg {
        display: flex;
        position: relative;
        width: 163px;
        height: 46px;

        @media screen and (max-width: 1000px) {
          width: 187px;
        }

        @media screen and (max-width: 550px) {
          width: 54px;
          height: 50px;
        }

        &::after {
          display: block;
          position: relative;
          content: url('/assets/sub-line.svg');

          @media screen and (max-width: 1000px) {
            content: url('/assets/sub-line-md.svg');
          }

          @media screen and (max-width: 550px) {
            content: url('/assets/sub-line-sm.svg');
          }
        }
      }
    }

    &.--reversed {
      flex-direction: row-reverse;

      .--main {
        justify-content: flex-start;
      }

      .--sub {
        flex-direction: row-reverse;
        right: 0;
        left: 2px;

        @media screen and (max-width:1350px) {
          left: 8px;
        }
      }

      .history-item__info {
        text-align: end;
        margin-right: 20px;
        margin-left: 0;
      }

      .svg {
        transform: rotateY(180deg);
      }
    }
  }

  &__year {
    text-shadow: 0px 0px 4px rgba(227, 242, 255, 0.35);
    font-size: 46px;
    color: var(--unnamed, #ECF1FF);
    font-style: normal;
    font-weight: 400;
    line-height: 60px;
    text-align: center;
    @media screen and (max-width:1000px) {
      color: var(--unnamed, #ECF1FF);
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
    color: var(--unnamed, #ECF1FF);
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
      top: 4em;
      width: calc(100% - 20px - 74px);
    }
  }

}
</style>