import { mergeProps, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
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
const PaginationBullet_vue_vue_type_style_index_0_scoped_4b72cb25_lang = "";
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
const PaginationNav_vue_vue_type_style_index_0_scoped_fbe19926_lang = "";
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
const HistoryItem_vue_vue_type_style_index_0_scoped_c2333da6_lang = "";
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
          shortDescription: "Дата создания образовательной организации",
          info: "Ульяновский авиационный колледж ведет свою историю с 9 июля 1985 года, с даты, когда приказом Министра авиационной промышленности СССР №200 на базе строящегося гиганта авиационной промышленности страны Ульяновского авиационного промышленного комплекса им. Д. Ф. Устинова был образован Ульяновский авиационный техникум."
        },
        {
          id: 1,
          year: 1988,
          shortDescription: "Первые выпускники нового учебного заведения",
          info: "За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."
        },
        {
          id: 2,
          year: 1989,
          shortDescription: "Первые выпускники нового учебного заведения",
          info: "За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."
        },
        {
          id: 3,
          year: 1990,
          shortDescription: "Первые выпускники нового учебного заведения",
          info: "За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."
        },
        {
          id: 4,
          year: 1996,
          shortDescription: "Первые выпускники нового учебного заведения",
          info: "За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."
        },
        {
          id: 5,
          year: 1999,
          shortDescription: "Первые выпускники нового учебного заведения",
          info: "За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."
        },
        {
          id: 6,
          year: 2e3,
          shortDescription: "Первые выпускники нового учебного заведения",
          info: "За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."
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
const HistoryLine_vue_vue_type_style_index_0_scoped_814399a6_lang = "";
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
const index_vue_vue_type_style_index_0_scoped_9d0303ad_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HistoryLine = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mainpage" }, _attrs))} data-v-9d0303ad><div class="hero" data-v-9d0303ad><h1 class="hero__title" data-v-9d0303ad>ОГАПОУ «УАвиаК-МЦК»</h1><div class="hero__description" data-v-9d0303ad> Областное государственное автономное профессиональное образовательное учреждение «Ульяновский авиационный колледж — Межрегиональный центр компетенций» </div></div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-cc77d3df.js.map
