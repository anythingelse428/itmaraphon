import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-744fccd2.mjs';
import { useSSRContext, mergeProps, withCtx, renderSlot, createTextVNode } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/devalue/index.js';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/pathe/dist/index.mjs';
import '../server.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/@unhead/schema-org/dist/index.mjs';

const _sfc_main$2 = {
  name: "NavigationLink",
  props: {
    link: {
      type: String,
      default: "#"
    }
  }
};
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
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f8c1d1f5"]]);
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
const _imports_0 = "" + publicAssetsURL("assets/logo.svg");
const _imports_1 = "" + publicAssetsURL("assets/icons/search.svg");
const _imports_2 = "" + publicAssetsURL("assets/icons/blind.svg");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavigationLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: "nav",
    ref: "nav"
  }, _attrs))} data-v-34ca2159><div class="nav-brand" data-v-34ca2159><img${ssrRenderAttr("src", _imports_0)} width="103" height="60" alt="\u0423\u0430\u0432\u0438\u0430\u041A-\u041C\u0426\u041A" srcset="" data-v-34ca2159></div><div class="${ssrRenderClass([$data.isOpened && "active", "nav-collapse"])}" data-v-34ca2159><div class="nav-links" data-v-34ca2159>`);
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041E \u043A\u043E\u043B\u043B\u0435\u0434\u0436\u0435`);
      } else {
        return [
          createTextVNode("\u041E \u043A\u043E\u043B\u043B\u0435\u0434\u0436\u0435")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0410\u0431\u0438\u0442\u0443\u0440\u0438\u0435\u043D\u0442\u0430\u043C`);
      } else {
        return [
          createTextVNode("\u0410\u0431\u0438\u0442\u0443\u0440\u0438\u0435\u043D\u0442\u0430\u043C")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C`);
      } else {
        return [
          createTextVNode("\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F\u043C`);
      } else {
        return [
          createTextVNode("\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F\u043C")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0422\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E`);
      } else {
        return [
          createTextVNode("\u0422\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NavigationLink, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0410\u0432\u0442\u043E\u0448\u043A\u043E\u043B\u0430`);
      } else {
        return [
          createTextVNode("\u0410\u0432\u0442\u043E\u0448\u043A\u043E\u043B\u0430")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="nav-tools" data-v-34ca2159><div class="nav-tool" data-v-34ca2159><img${ssrRenderAttr("src", _imports_1)} alt="\u041F\u043E\u0438\u0441\u043A" width="18" height="18" data-v-34ca2159></div><div class="nav-tool" data-v-34ca2159><img${ssrRenderAttr("src", _imports_2)} alt="\u0412\u0435\u0440\u0441\u0438\u044F \u0434\u043B\u044F \u0441\u043B\u0430\u0431\u043E\u0432\u0438\u0434\u044F\u0449\u0438\u0445" width="26" height="18" data-v-34ca2159></div><div class="${ssrRenderClass([$data.isOpened && "active", "nav-toggler"])}" data-v-34ca2159></div></div></nav>`);
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavigationMenu = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout --default" }, _attrs))} data-v-b6015ef5>`);
  _push(ssrRenderComponent(_component_NavigationMenu, null, null, _parent));
  _push(`<main class="container" data-v-b6015ef5>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer data-v-b6015ef5></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b6015ef5"]]);

export { _default as default };
//# sourceMappingURL=default-029e0aa1.mjs.map
