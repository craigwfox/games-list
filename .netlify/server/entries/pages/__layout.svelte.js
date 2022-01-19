var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout
});
var import_index_2dda268c = __toModule(require("../../chunks/index-2dda268c.js"));
const getStores = () => {
  const stores = (0, import_index_2dda268c.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Header = (0, import_index_2dda268c.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_2dda268c.a)(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<header class="${"site-header"}"><h1>\u{1F3AE} Games list</h1>
  <nav><a sveltekit:prefetch href="${"/"}"${(0, import_index_2dda268c.b)([$page.url.pathname === "/" ? "active" : ""].join(" ").trim())}>Home</a>
    <a sveltekit:prefetch href="${"/about"}"${(0, import_index_2dda268c.b)([$page.url.pathname === "/about" ? "active" : ""].join(" ").trim())}>About</a>
    <a sveltekit:prefetch href="${"/games"}"${(0, import_index_2dda268c.b)([$page.url.pathname === "/games" ? "active" : ""].join(" ").trim())}>Games</a></nav></header>`;
});
var styles = "";
const _layout = (0, import_index_2dda268c.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-1xyashg"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-1xyashg"><link href="${"https://fonts.googleapis.com/css2?family=Fugaz+One&family=Rubik:wght@400;700&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-1xyashg">`, ""}

${(0, import_index_2dda268c.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"main"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"site-footer"}"><p>\xA9 ${(0, import_index_2dda268c.e)(new Date().getFullYear())} <a href="${"https://craigwfox.com"}">Craig Fox</a>
    <img src="${"/images/fox-icon.svg"}" alt="${"Illustration of fox head"}">
    Built using SvelteKit
  </p></footer>`;
});
