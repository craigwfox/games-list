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
  default: () => Tony_hawks_pro_skater_1_2,
  metadata: () => metadata
});
var import_index_2dda268c = __toModule(require("../../../chunks/index-2dda268c.js"));
var import_game_7d8662af = __toModule(require("../../../chunks/_game-7d8662af.js"));
var import_store_46d56786 = __toModule(require("../../../chunks/store-46d56786.js"));
const metadata = {
  "title": "Tony Hawks Pro Skater 1 + 2",
  "console_settings": {
    "console": ["ps_ps4"],
    "play_method": "physical"
  },
  "game_info": {
    "times_played": [
      {
        "time_played": {
          "play_time_hours": 20,
          "play_time_minutes": ""
        },
        "date_year": "2020"
      }
    ],
    "rating": "goat",
    "poster": "/img/tony-hawks-pro-skater-1-2-thumbnail.webp",
    "banner": "/img/tony-hawks-pro-skater-1-2-banner.webp"
  }
};
const Tony_hawks_pro_skater_1_2 = (0, import_index_2dda268c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2dda268c.v)(import_game_7d8662af.G, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {})}`;
});
