import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext, ref, unref, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
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
const _imports_0 = "" + __publicAssetsURL("assets/logo.svg");
const _imports_1 = "" + __publicAssetsURL("assets/icons/search.svg");
const _imports_2 = "" + __publicAssetsURL("assets/icons/blind.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavigationLink",
  __ssrInlineRender: true,
  props: {
    link: {
      type: String,
      default: "#"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "nav-link",
        to: __props.link
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
    };
  }
});
const NavigationLink_vue_vue_type_style_index_0_scoped_2dce56d4_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/NavigationLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NavigationLink = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2dce56d4"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpened = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "nav",
        ref: "nav"
      }, _attrs))} data-v-a722e134><div class="nav-brand" data-v-a722e134><img${ssrRenderAttr("src", _imports_0)} width="103" height="60" alt="УавиаК-МЦК" srcset="" data-v-a722e134></div><div class="${ssrRenderClass([unref(isOpened) && "active", "nav-collapse"])}" data-v-a722e134><div class="nav-links" data-v-a722e134>`);
      _push(ssrRenderComponent(NavigationLink, null, {
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
      _push(ssrRenderComponent(NavigationLink, null, {
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
      _push(ssrRenderComponent(NavigationLink, null, {
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
      _push(ssrRenderComponent(NavigationLink, null, {
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
      _push(ssrRenderComponent(NavigationLink, null, {
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
      _push(ssrRenderComponent(NavigationLink, null, {
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
      _push(`</div></div><div class="nav-tools" data-v-a722e134><div class="nav-tool" data-v-a722e134><img${ssrRenderAttr("src", _imports_1)} alt="Поиск" width="18" height="18" data-v-a722e134></div><div class="nav-tool" data-v-a722e134><img${ssrRenderAttr("src", _imports_2)} alt="Версия для слабовидящих" width="26" height="18" data-v-a722e134></div><div class="${ssrRenderClass([unref(isOpened) && "active", "nav-toggler"])}" data-v-a722e134></div></div></nav>`);
    };
  }
});
const NavigationMenu_vue_vue_type_style_index_0_scoped_a722e134_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/NavigationMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NavigationMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a722e134"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout --default" }, _attrs))} data-v-acff9c4f><header data-v-acff9c4f>`);
      _push(ssrRenderComponent(NavigationMenu, null, null, _parent));
      _push(`</header><main class="container" data-v-acff9c4f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer data-v-acff9c4f></footer></div>`);
    };
  }
});
const default_vue_vue_type_style_index_0_scoped_acff9c4f_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-acff9c4f"]]);
export {
  _default as default
};
//# sourceMappingURL=default-707feee1.js.map
