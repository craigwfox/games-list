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
  get: () => get
});
const get = async () => {
  const allGameFiles = { "../games/astroneer.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/astroneer.md.js"))), "../games/broforce.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/broforce.md.js"))), "../games/brutal-legend.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/brutal-legend.md.js"))), "../games/cyberpunk-2077.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/cyberpunk-2077.md.js"))), "../games/death-stranding.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/death-stranding.md.js"))), "../games/doom-eternal.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/doom-eternal.md.js"))), "../games/gris.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/gris.md.js"))), "../games/hades.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/hades.md.js"))), "../games/hearthstone-battlegrounds.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/hearthstone-battlegrounds.md.js"))), "../games/hitman-2.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/hitman-2.md.js"))), "../games/life-is-strange-true-colors.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/life-is-strange-true-colors.md.js"))), "../games/life-is-strange.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/life-is-strange.md.js"))), "../games/minecraft-dungeons.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/minecraft-dungeons.md.js"))), "../games/no-mans-sky.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/no-mans-sky.md.js"))), "../games/paper-mario-the-origami-king.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/paper-mario-the-origami-king.md.js"))), "../games/poly-bridge-2.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/poly-bridge-2.md.js"))), "../games/portal.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/portal.md.js"))), "../games/prison-architect.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/prison-architect.md.js"))), "../games/return-to-dinosaur-land.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/return-to-dinosaur-land.md.js"))), "../games/rome-total-war-remastered.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/rome-total-war-remastered.md.js"))), "../games/slurdgery.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/slurdgery.md.js"))), "../games/spyro-2-riptos-rage.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/spyro-2-riptos-rage.md.js"))), "../games/subnautica-below-zero.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/subnautica-below-zero.md.js"))), "../games/subnautica.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/subnautica.md.js"))), "../games/super-mario-3d-world-bowsers-fury.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/super-mario-3d-world-bowsers-fury.md.js"))), "../games/super-mario-64.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/super-mario-64.md.js"))), "../games/super-mario-galaxy.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/super-mario-galaxy.md.js"))), "../games/super-mario-odyssey.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/super-mario-odyssey.md.js"))), "../games/super-mario-world-2-yoshis-island.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/super-mario-world-2-yoshis-island.md.js"))), "../games/tony-hawks-pro-skater-1-2.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/tony-hawks-pro-skater-1-2.md.js"))), "../games/trackmania-2020.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/trackmania-2020.md.js"))), "../games/untitled-goose-game.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/untitled-goose-game.md.js"))), "../games/valheim.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/valheim.md.js"))), "../games/wolfenstein-ii-the-new-colossus.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/wolfenstein-ii-the-new-colossus.md.js"))), "../games/world-of-warcraft-shadowlands.md": () => Promise.resolve().then(() => __toModule(require("../../pages/games/world-of-warcraft-shadowlands.md.js"))) };
  const iterableGameFiles = Object.entries(allGameFiles);
  const allGames = await Promise.all(iterableGameFiles.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    const GamePath = path.slice(2, -3);
    return {
      meta: metadata,
      path: GamePath
    };
  }));
  return {
    status: 200,
    body: allGames
  };
};
