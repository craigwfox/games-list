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
  default: () => Super_mario_3d_world_bowsers_fury,
  metadata: () => metadata
});
var import_index_2dda268c = __toModule(require("../../../chunks/index-2dda268c.js"));
var import_game_7d8662af = __toModule(require("../../../chunks/_game-7d8662af.js"));
var import_store_46d56786 = __toModule(require("../../../chunks/store-46d56786.js"));
const metadata = {
  "title": "Super Mario 3D World + Bowser's Fury",
  "console_settings": {
    "console": ["n_switch"],
    "play_method": "physical"
  },
  "game_info": {
    "times_played": [
      {
        "time_played": {
          "play_time_hours": 30,
          "play_time_minutes": ""
        },
        "date_year": "2021"
      }
    ],
    "rating": "great",
    "poster": null,
    "banner": "/img/super-mario-3d-world-bowsers-fury-banner.webp"
  }
};
const Super_mario_3d_world_bowsers_fury = (0, import_index_2dda268c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2dda268c.v)(import_game_7d8662af.G, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<h3>3D World</h3>
<p>This was my first time playing 3D world. For the most part I liked the levels and power ups and how levels were built around them. There are a lot of levels that are made pointless because of the cat suit, but that\u2019s just kind of fun to do ha. Roselina was a lot of fun at the end, but she does start to feel required for many end levels. The only big flaw for me was the depth perception seemed to get really awkward at times and I\u2019d also lose my character quite a bit. Another issue I had was how annoying it would be to get to a spot that you needed a specific power up and would have to exit the level and go to a different level to get the power up you need. Also the game seems to want you to play each level with every character but there really seems to be no reason to do that.</p>
<h3>Bowser\u2019s Fury</h3>
<p>I loved every bit of this outside of repeating the Bowser fight over and over. Lot\u2019s of cool areas and fun platforming. Being able to stockpile power ups made it easy to swap to what you need and deal with more annoying areas.</p>`
  })}`;
});
