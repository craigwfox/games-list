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
  default: () => Spyro_2_riptos_rage,
  metadata: () => metadata
});
var import_index_2dda268c = __toModule(require("../../../chunks/index-2dda268c.js"));
var import_game_7d8662af = __toModule(require("../../../chunks/_game-7d8662af.js"));
var import_store_46d56786 = __toModule(require("../../../chunks/store-46d56786.js"));
const metadata = {
  "title": "Spyro 2: Ripto's Rage!",
  "console_settings": {
    "console": ["ps_ps4"],
    "play_method": "physical"
  },
  "game_info": {
    "times_played": [
      {
        "time_played": {
          "play_time_hours": 12,
          "play_time_minutes": ""
        },
        "date_year": "2021"
      }
    ],
    "rating": "great",
    "poster": "/img/spyro-remastered-thumbnail.webp",
    "banner": "/img/spyro-remastered-banner.webp"
  }
};
const Spyro_2_riptos_rage = (0, import_index_2dda268c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2dda268c.v)(import_game_7d8662af.G, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>I enjoyed this game quite a lot, but I think I played it a bit too soon
after playing Spyro 1. It really kinda feels a lot like the first game. That
said it\u2019s still quite a bit of fun and I did collect close to 100% of all
items. Pretty fun platforming, some of the bosses got a bit annoying, just
seemed so slow waiting for the stupid birds to drop items. I also have a
love hate relationship with the speedway levels.</p>`
  })}`;
});
