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
  default: () => Routes,
  prerender: () => prerender
});
var import_index_2dda268c = __toModule(require("../../chunks/index-2dda268c.js"));
var import_store_46d56786 = __toModule(require("../../chunks/store-46d56786.js"));
const prerender = true;
const Routes = (0, import_index_2dda268c.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home ${(0, import_index_2dda268c.e)(import_store_46d56786.s.title)}</title>`, ""}`, ""}

<h1 id="${"recent-games"}">Recent games</h1>

<section aria-label="${"Games feed"}"><div class="${"game-filters"}"><div class="${"form"}"><label for="${"sortYear"}">Sort by year</label>
      <select name="${"sortYear"}" id="${"sortYear"}"><option value="${"all"}" selected>All</option><option value="${""}">2021</option></select></div>
    <div class="${"form"}"><label for="${"sortConsole"}">Sort by console</label>
      <select name="${"sortConsole"}" id="${"sortConsole"}"><option value="${"all"}" selected>All</option><option value="${""}">SNES</option></select></div>
    <div class="${"form"}"><label for="${"sortRating"}">Sort by rating</label>
      <select name="${"sortRating"}" id="${"sortRating"}"><option value="${"all"}" selected>All</option><option value="${""}">bad</option></select></div></div>
  <div class="${"game-wrapper"}">...</div></section>`;
});
