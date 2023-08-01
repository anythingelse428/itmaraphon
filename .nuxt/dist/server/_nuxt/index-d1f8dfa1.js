import { defineComponent, ref, onUnmounted, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
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
      }, _attrs))} data-v-ef1f348d><div class="history-item__header" data-v-ef1f348d><div class="history-item__year" data-v-ef1f348d>${ssrInterpolate(__props.year)}</div><div class="history-item__description" data-v-ef1f348d>${ssrInterpolate(__props.shortDescripton)}</div></div><div class="history-item__step" data-v-ef1f348d><div class="small-light" data-v-ef1f348d></div><div class="big-light" data-v-ef1f348d></div></div><div class="history-item__line" data-v-ef1f348d><div class="history-item__line --main" data-v-ef1f348d><div class="svg" data-v-ef1f348d></div></div><div class="history-item__line --sub" data-v-ef1f348d><div class="svg" data-v-ef1f348d></div><div class="history-item__info" data-v-ef1f348d>${ssrInterpolate(__props.info)}</div></div></div></section>`);
    };
  }
});
const HistoryItem_vue_vue_type_style_index_0_scoped_ef1f348d_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/History/HistoryItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HistoryItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ef1f348d"]]);
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
      }, _attrs))} data-v-9c638fd5></div>`);
    };
  }
});
const PaginationBullet_vue_vue_type_style_index_0_scoped_9c638fd5_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination/PaginationBullet.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PaginationBullet = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9c638fd5"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PaginationNav",
  __ssrInlineRender: true,
  props: {
    pagesQty: { type: Number, required: true },
    current: { type: Number, default: 0 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))} data-v-bd1bb584><!--[-->`);
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
const PaginationNav_vue_vue_type_style_index_0_scoped_bd1bb584_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination/PaginationNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PaginationNav = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bd1bb584"]]);
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
    function changeCurrentHistoryItem() {
      const options = {
        threshold: window.innerHeight > 740 ? 0.1 : 0,
        rootMargin: "-45% 0% -45% 0%"
      };
      const updateCurrent = (entries, observer2) => {
        throttle(() => {
          entries.forEach((entry) => {
            const target = entry.target;
            if (entry.isIntersecting) {
              currentYear.value = Number(target.getAttribute("aria-label"));
              currentPage.value = Number(
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
    onUnmounted(() => {
      window.removeEventListener("resize", () => {
        changeCurrentHistoryItem();
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if (((_a = history[0]) == null ? void 0 : _a.info.length) > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "history" }, _attrs))} data-v-335047a7><div class="history__pagination" data-v-335047a7>`);
        _push(ssrRenderComponent(PaginationNav, {
          pagesQty: history.length,
          current: currentPage.value
        }, null, _parent));
        _push(`</div><div class="history__row" data-v-335047a7><!--[-->`);
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
const HistoryLine_vue_vue_type_style_index_0_scoped_335047a7_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/History/HistoryLine.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HistoryLine = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-335047a7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mainpage" }, _attrs))} data-v-694d5a6b><div class="hero" data-v-694d5a6b><h1 class="hero__title" data-v-694d5a6b>ОГАПОУ «УАвиаК-МЦК»</h1><div class="hero__description" data-v-694d5a6b> Областное государственное автономное профессиональное образовательное учреждение «Ульяновский авиационный колледж — Межрегиональный центр компетенций» </div></div>`);
      _push(ssrRenderComponent(HistoryLine, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_694d5a6b_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-694d5a6b"]]);
export {
  index as default
};
//# sourceMappingURL=index-d1f8dfa1.js.map
