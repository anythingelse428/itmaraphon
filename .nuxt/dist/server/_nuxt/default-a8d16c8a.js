import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
const _sfc_main$1 = {
  name: "NavigationMenu",
  data() {
    return {
      isOpened: false
    };
  },
  methods: {
    doSticky() {
      var _a;
      const $nav = this.$refs.nav;
      if (window.scrollY >= $nav.offsetTop) {
        $nav.classList.add("sticky");
        (_a = $nav.parentElement) == null ? void 0 : _a.classList.add("sticky");
      } else {
        $nav.classList.remove("sticky");
      }
    }
  },
  mounted() {
    this.doSticky();
  }
};
const _imports_0 = "" + __publicAssetsURL("assets/logo.svg");
const _imports_1 = "" + __publicAssetsURL("assets/icons/search.svg");
const _imports_2 = "" + __publicAssetsURL("assets/icons/blind.svg");
const NavigationMenu_vue_vue_type_style_index_0_scoped_d71514ff_lang = "";
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: "nav",
    ref: "nav"
  }, _attrs))} data-v-d71514ff><div class="nav-brand" data-v-d71514ff><img${ssrRenderAttr("src", _imports_0)} width="103" height="60" alt="УавиаК-МЦК" srcset="" data-v-d71514ff></div><div class="${ssrRenderClass([$data.isOpened && "active", "nav-collapse"])}" data-v-d71514ff><div class="nav-links" data-v-d71514ff><div class="nav-link" data-v-d71514ff>О колледже</div><div class="nav-link" data-v-d71514ff>Абитуриентам</div><div class="nav-link" data-v-d71514ff>Студентам</div><div class="nav-link" data-v-d71514ff>Преподавателям</div><div class="nav-link" data-v-d71514ff>Трудоустройство</div><div class="nav-link" data-v-d71514ff>Автошкола</div></div></div><div class="nav-tools" data-v-d71514ff><div class="nav-tool" data-v-d71514ff><img${ssrRenderAttr("src", _imports_1)} alt="Поиск" width="18" height="18" data-v-d71514ff></div><div class="nav-tool" data-v-d71514ff><img${ssrRenderAttr("src", _imports_2)} alt="Версия для слабовидящих" width="26" height="18" data-v-d71514ff></div><div class="${ssrRenderClass([$data.isOpened && "active", "nav-toggler"])}" data-v-d71514ff></div></div></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavigationMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d71514ff"]]);
const _sfc_main = {
  components: {
    NavigationMenu: __nuxt_component_0
  }
};
const default_vue_vue_type_style_index_0_scoped_2a5b62d5_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavigationMenu = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout --default" }, _attrs))} data-v-2a5b62d5>`);
  _push(ssrRenderComponent(_component_NavigationMenu, null, null, _parent));
  _push(`<main class="container" data-v-2a5b62d5>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer data-v-2a5b62d5></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a5b62d5"]]);
export {
  _default as default
};
//# sourceMappingURL=default-a8d16c8a.js.map
