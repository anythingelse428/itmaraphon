import { defineComponent, ref, onUnmounted, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HistoryItem",
  __ssrInlineRender: true,
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
  setup(__props) {
    const props = __props;
    const isDesktop = ref(true);
    onUnmounted(() => {
      window.removeEventListener("resize", () => {
        isDesktop.value = window.innerWidth > 1350;
      });
    });
    const isCurrent = computed({
      get() {
        return props.currentArea === props.year;
      },
      set() {
        return props.currentArea === props.year;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: (isCurrent.value ? "--current" : "--muted") + (__props.isReversed && isDesktop.value ? " --reversed" : "") + " history-item"
      }, _attrs))} data-v-ee7c491a><div class="history-item__header" data-v-ee7c491a><div class="history-item__year" data-v-ee7c491a>${ssrInterpolate(__props.year)}</div><div class="history-item__description" data-v-ee7c491a>${ssrInterpolate(__props.shortDescripton)}</div></div><div class="history-item__step" data-v-ee7c491a><div class="small-light" data-v-ee7c491a></div><div class="big-light" data-v-ee7c491a></div></div><div class="history-item__line" data-v-ee7c491a><div class="history-item__line --main" data-v-ee7c491a><div class="svg" data-v-ee7c491a></div></div><div class="history-item__line --sub" data-v-ee7c491a><div class="svg" data-v-ee7c491a></div><div class="history-item__info" data-v-ee7c491a>${ssrInterpolate(__props.info)}</div></div></div></section>`);
    };
  }
});
const HistoryItem_vue_vue_type_style_index_0_scoped_ee7c491a_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/History/HistoryItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HistoryItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ee7c491a"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PaginationBullet",
  __ssrInlineRender: true,
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
  setup(__props) {
    const props = __props;
    const isActive = computed({
      get() {
        return props.active === props.order;
      },
      set() {
        return props.active === props.order;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "pagination-bullet" + (isActive.value ? " active" : "")
      }, _attrs))} data-v-816707de></div>`);
    };
  }
});
const PaginationBullet_vue_vue_type_style_index_0_scoped_816707de_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination/PaginationBullet.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PaginationBullet = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-816707de"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PaginationNav",
  __ssrInlineRender: true,
  props: {
    pagesQty: { type: Number, required: true },
    current: { type: Number, default: 0 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))} data-v-06f3ead5><!--[-->`);
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
const PaginationNav_vue_vue_type_style_index_0_scoped_06f3ead5_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination/PaginationNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PaginationNav = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-06f3ead5"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HistoryLine",
  __ssrInlineRender: true,
  setup(__props) {
    const history = [
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
    ];
    const currentYear = ref(1985);
    const currentPage = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if (((_a = history[0]) == null ? void 0 : _a.info.length) > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "history" }, _attrs))} data-v-38300401><div class="history__pagination" data-v-38300401>`);
        _push(ssrRenderComponent(PaginationNav, {
          pagesQty: history.length,
          current: currentPage.value
        }, null, _parent));
        _push(`</div><div class="history__row" data-v-38300401><!--[-->`);
        ssrRenderList(history, (item) => {
          _push(ssrRenderComponent(HistoryItem, {
            key: item.id,
            year: item.year,
            "short-descripton": item.shortDescription,
            info: item.info,
            id: "page_" + item.id,
            "aria-label": item.year,
            currentArea: currentYear.value,
            isReversed: item.id % 2 > 0
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const HistoryLine_vue_vue_type_style_index_0_scoped_38300401_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/History/HistoryLine.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-38300401"]]);
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
//# sourceMappingURL=index-112ab80a.js.map
