import { _ as __nuxt_component_0$2 } from "./nuxt-link-744fccd2.js";
import { mergeProps, withCtx, renderSlot, useSSRContext, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
import "@unhead/schema-org";
const _sfc_main$2 = {
  name: "NavigationLink",
  props: {
    link: {
      type: String,
      default: "#"
    }
  }
};
const NavigationLink_vue_vue_type_style_index_0_scoped_8b23ce6b_lang = "";
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    class: "nav-link",
    to: $props.link
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/NavigationLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-8b23ce6b"]]);
const _sfc_main$1 = {
  name: "NavigationMenu",
  components: {
    NavigationLink: __nuxt_component_0$1
  },
  data() {
    return {
      isOpened: false
    };
  }
};
const _imports_0 = "" + __publicAssetsURL("assets/logo.svg");
const _imports_1 = "" + __publicAssetsURL("assets/icons/search.svg");
const _imports_2 = "" + __publicAssetsURL("assets/icons/blind.svg");
const NavigationMenu_vue_vue_type_style_index_0_scoped_34ca2159_lang = "";
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavigationLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: "nav",
    ref: "nav"
  }, _attrs))} data-v-34ca2159><div class="nav-brand" data-v-34ca2159><img${ssrRenderAttr("src", _imports_0)} width="103" height="60" alt="УавиаК-МЦК" srcset="" data-v-34ca2159></div><div class="${ssrRenderClass([$data.isOpened && "active", "nav-collapse"])}" data-v-34ca2159><div class="nav-links" data-v-34ca2159>`);
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`О колледже`);
      } else {
        return [
          createTextVNode("О колледже")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Абитуриентам`);
      } else {
        return [
          createTextVNode("Абитуриентам")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Студентам`);
      } else {
        return [
          createTextVNode("Студентам")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Преподавателям`);
      } else {
        return [
          createTextVNode("Преподавателям")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Трудоустройство`);
      } else {
        return [
          createTextVNode("Трудоустройство")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Автошкола`);
      } else {
        return [
          createTextVNode("Автошкола")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="nav-tools" data-v-34ca2159><div class="nav-tool" data-v-34ca2159><img${ssrRenderAttr("src", _imports_1)} alt="Поиск" width="18" height="18" data-v-34ca2159></div><div class="nav-tool" data-v-34ca2159><img${ssrRenderAttr("src", _imports_2)} alt="Версия для слабовидящих" width="26" height="18" data-v-34ca2159></div><div class="${ssrRenderClass([$data.isOpened && "active", "nav-toggler"])}" data-v-34ca2159></div></div></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/NavigationMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-34ca2159"]]);
const _sfc_main = {
  components: {
    NavigationMenu: __nuxt_component_0
  }
};
const default_vue_vue_type_style_index_0_scoped_2cd40571_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavigationMenu = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout --default" }, _attrs))} data-v-2cd40571>`);
  _push(ssrRenderComponent(_component_NavigationMenu, null, null, _parent));
  _push(`<main class="container" data-v-2cd40571>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer data-v-2cd40571></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2cd40571"]]);
export {
  _default as default
};
//# sourceMappingURL=default-b214c79e.js.map
