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
  default: () => Hades,
  metadata: () => metadata
});
var import_index_2dda268c = __toModule(require("../../../chunks/index-2dda268c.js"));
var import_game_7d8662af = __toModule(require("../../../chunks/_game-7d8662af.js"));
var import_store_46d56786 = __toModule(require("../../../chunks/store-46d56786.js"));
const metadata = {
  "title": "Hades",
  "console_settings": {
    "console": ["n_switch"],
    "play_method": "physical"
  },
  "game_info": {
    "times_played": [
      {
        "time_played": {
          "play_time_hours": 35,
          "play_time_minutes": ""
        },
        "date_year": "2021"
      }
    ],
    "rating": "goat",
    "poster": "/img/hades-thumbnail.webp",
    "banner": "/img/hades-banner.webp"
  }
};
const Hades = (0, import_index_2dda268c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2dda268c.v)(import_game_7d8662af.G, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>This was my first time to really dig into a roguelike game. I\u2019ve always enjoyed learning enemy attack patterns and dungeon layouts so maybe I shouldn\u2019t have waited so long. I did turn on god mode to make the game easier, I found myself just a bit too slow to react in a lot of cases so being able to do that really helped.</p>
<h3>Things I liked</h3>
<p>The story isn\u2019t forced on you, you could easily ignore it and just grind away. Primarily you learn the story by talking to NPC\u2019s throughout Hade\u2019s palace and a bit in the floors of the dungeons.</p>
<p>The music and art, like all of Supergiant\u2019s games, is also great.</p>
<h3>Other thoughts</h3>
<p>I\u2019ll definitely be playing this game again/more in the future. I want to play more and try turning off god mode and maybe even dig into the heats (increases the difficulty).</p>`
  })}`;
});
