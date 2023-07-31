import { useSSRContext, defineComponent, mergeProps } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$4 = {
  name: "PaginationBullet",
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
    scrollTo(id) {
      const $item = document.querySelector("#page_" + id);
      const itemHeight = Number($item == null ? void 0 : $item.clientHeight);
      const itemY = Number($item == null ? void 0 : $item.getBoundingClientRect().y);
      if (itemY && itemHeight && $item) {
        window.scrollTo({
          top: ($item == null ? void 0 : $item.getBoundingClientRect().y) + window.scrollY - itemHeight / 1.2
        });
      }
    }
  },
  computed: {
    isActive() {
      return this.active === this.order;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "pagination-bullet" + ($options.isActive ? " active" : "")
  }, _attrs))} data-v-4b72cb25></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination/PaginationBullet.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PaginationBullet = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-4b72cb25"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PaginationNav",
  __ssrInlineRender: true,
  props: {
    pagesQty: { type: Number, required: true },
    current: { type: Number, default: 0 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))} data-v-fbe19926><!--[-->`);
      ssrRenderList(__props.pagesQty, (i) => {
        _push(ssrRenderComponent(PaginationBullet, {
          key: i,
          order: i - 1,
          active: __props.current
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination/PaginationNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-fbe19926"]]);
const PaginationNav$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$1
});
const _sfc_main$2 = {
  name: "HistoryItem",
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
    };
  },
  mounted() {
    this.isDesktop = window.innerWidth > 1350;
    addEventListener("resize", () => {
      this.isDesktop = window.innerWidth > 1350;
    });
  },
  computed: {
    isCurrent() {
      return this.currentArea == this.year;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: ($options.isCurrent ? "--current" : "--muted") + ($props.isReversed && $data.isDesktop ? " --reversed" : "") + " history-item"
  }, _attrs))} data-v-c2333da6><div class="history-item__header" data-v-c2333da6><div class="history-item__year" data-v-c2333da6>${ssrInterpolate($props.year)}</div><div class="history-item__description" data-v-c2333da6>${ssrInterpolate($props.shortDescripton)}</div></div><div class="history-item__step" data-v-c2333da6><div class="small-light" data-v-c2333da6></div><div class="big-light" data-v-c2333da6></div></div><div class="history-item__line" data-v-c2333da6><div class="history-item__line --main" data-v-c2333da6><div class="svg" data-v-c2333da6></div></div><div class="history-item__line --sub" data-v-c2333da6><div class="svg" data-v-c2333da6></div><div class="history-item__info" data-v-c2333da6>${ssrInterpolate($props.info)}</div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/History/HistoryItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c2333da6"]]);
const HistoryItem$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1
});
const throttle = (fn, wait = 500) => {
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this, args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
const HistoryItem = () => Promise.resolve().then(function() {
  return HistoryItem$1;
});
const PaginationNav = () => Promise.resolve().then(function() {
  return PaginationNav$1;
});
const _sfc_main$1 = {
  name: "HistoryLine",
  components: { HistoryItem, PaginationNav },
  data() {
    return {
      history: [
        {
          id: 0,
          year: 1985,
          shortDescription: "\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438",
          info: "\u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A\u0438\u0439 \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436 \u0432\u0435\u0434\u0435\u0442 \u0441\u0432\u043E\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0441 9 \u0438\u044E\u043B\u044F 1985 \u0433\u043E\u0434\u0430, \u0441 \u0434\u0430\u0442\u044B, \u043A\u043E\u0433\u0434\u0430 \u043F\u0440\u0438\u043A\u0430\u0437\u043E\u043C \u041C\u0438\u043D\u0438\u0441\u0442\u0440\u0430 \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0421\u0421\u0421\u0420 \u2116200 \u043D\u0430 \u0431\u0430\u0437\u0435 \u0441\u0442\u0440\u043E\u044F\u0449\u0435\u0433\u043E\u0441\u044F \u0433\u0438\u0433\u0430\u043D\u0442\u0430 \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u044B \u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u0438\u043C. \u0414. \u0424. \u0423\u0441\u0442\u0438\u043D\u043E\u0432\u0430 \u0431\u044B\u043B \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D \u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A\u0438\u0439 \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0443\u043C."
        },
        {
          id: 1,
          year: 1988,
          shortDescription: "\u041F\u0435\u0440\u0432\u044B\u0435 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
          info: "\u0417\u0430 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0431\u044B\u043B\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u043C\u043D\u043E\u0433\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0435\u0431\u043D\u043E\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439 \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043E\u043C."
        },
        {
          id: 2,
          year: 1989,
          shortDescription: "\u041F\u0435\u0440\u0432\u044B\u0435 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
          info: "\u0417\u0430 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0431\u044B\u043B\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u043C\u043D\u043E\u0433\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0435\u0431\u043D\u043E\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439 \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043E\u043C."
        },
        {
          id: 3,
          year: 1990,
          shortDescription: "\u041F\u0435\u0440\u0432\u044B\u0435 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
          info: "\u0417\u0430 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0431\u044B\u043B\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u043C\u043D\u043E\u0433\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0435\u0431\u043D\u043E\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439 \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043E\u043C."
        },
        {
          id: 4,
          year: 1996,
          shortDescription: "\u041F\u0435\u0440\u0432\u044B\u0435 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
          info: "\u0417\u0430 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0431\u044B\u043B\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u043C\u043D\u043E\u0433\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0435\u0431\u043D\u043E\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439 \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043E\u043C."
        },
        {
          id: 5,
          year: 1999,
          shortDescription: "\u041F\u0435\u0440\u0432\u044B\u0435 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
          info: "\u0417\u0430 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0431\u044B\u043B\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u043C\u043D\u043E\u0433\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0435\u0431\u043D\u043E\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439 \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043E\u043C."
        },
        {
          id: 6,
          year: 2e3,
          shortDescription: "\u041F\u0435\u0440\u0432\u044B\u0435 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
          info: "\u0417\u0430 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0431\u044B\u043B\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u043C\u043D\u043E\u0433\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0435\u0431\u043D\u043E\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439 \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043E\u043C."
        }
      ],
      currentYear: 1985,
      currentPage: 0
    };
  },
  methods: {
    changeCurrentHistoryItem() {
      const options = {
        threshold: [0.9],
        rootMargin: "-20% 0% -15% 0%"
      };
      const updateCurrent = (entries, observer2) => {
        throttle(() => {
          entries.forEach((entry) => {
            const target = entry.target;
            if (entry.isIntersecting) {
              this.currentYear = Number(target.getAttribute("aria-label"));
              this.currentPage = Number(
                target.id.replace("page_", "")
              );
            }
          });
        })();
      };
      const observer = new IntersectionObserver(
        updateCurrent,
        options
      );
      const boxes = document.querySelectorAll("section.history-item");
      boxes.forEach((box) => {
        observer.observe(box);
      });
    }
  },
  mounted() {
    this.changeCurrentHistoryItem();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_PaginationNav = __nuxt_component_0$1;
  const _component_HistoryItem = __nuxt_component_1;
  if (((_a = $data.history[0]) == null ? void 0 : _a.info.length) > 0) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "history" }, _attrs))} data-v-814399a6><div class="history__pagination" data-v-814399a6>`);
    _push(ssrRenderComponent(_component_PaginationNav, {
      pagesQty: $data.history.length,
      current: $data.currentPage
    }, null, _parent));
    _push(`</div><div class="history__row" data-v-814399a6><!--[-->`);
    ssrRenderList($data.history, (item) => {
      _push(ssrRenderComponent(_component_HistoryItem, {
        key: item.id,
        year: item.year,
        "short-descripton": item.shortDescription,
        info: item.info,
        id: "page_" + item.id,
        "aria-label": item.year,
        currentArea: $data.currentYear,
        ref_for: true,
        ref: "historyitems",
        isReversed: item.id % 2 > 0
      }, null, _parent));
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/History/HistoryLine.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-814399a6"]]);
const _sfc_main = {
  name: "MainPage",
  components: { HistoryLine: __nuxt_component_0 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HistoryLine = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mainpage" }, _attrs))} data-v-9d0303ad><div class="hero" data-v-9d0303ad><h1 class="hero__title" data-v-9d0303ad>\u041E\u0413\u0410\u041F\u041E\u0423 \xAB\u0423\u0410\u0432\u0438\u0430\u041A-\u041C\u0426\u041A\xBB</h1><div class="hero__description" data-v-9d0303ad> \u041E\u0431\u043B\u0430\u0441\u0442\u043D\u043E\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \xAB\u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A\u0438\u0439 \u0430\u0432\u0438\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u043B\u0435\u0434\u0436 \u2014 \u041C\u0435\u0436\u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0439\xBB </div></div>`);
  _push(ssrRenderComponent(_component_HistoryLine, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9d0303ad"]]);

export { index as default };
//# sourceMappingURL=index-cc77d3df.mjs.map
