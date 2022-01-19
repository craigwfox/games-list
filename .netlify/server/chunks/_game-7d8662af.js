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
  G: () => Game
});
var import_index_2dda268c = __toModule(require("./index-2dda268c.js"));
var import_store_46d56786 = __toModule(require("./store-46d56786.js"));
function prettLabel(cpName, cpArry) {
  let prettyName = cpName;
  cpArry.forEach((element) => {
    cpName === element.value ? prettyName = element.label : prettyName;
  });
  return prettyName;
}
const Game = (0, import_index_2dda268c.c)(($$result, $$props, $$bindings, slots) => {
  const consoleArry = [
    {
      value: "n_nes",
      label: "Nintendo Entertainment System"
    },
    {
      value: "n_snes",
      label: "Super Nintendo Entertainment System"
    },
    { value: "n_n64", label: "Nintendo 64" },
    {
      value: "n_gamecube",
      label: "Nintendo Gamecube"
    },
    { value: "n_wii", label: "Nintendo Wii" },
    {
      value: "n_switch",
      label: "Nintendo Switch"
    },
    { value: "n_ds", label: "Nintendo DS" },
    { value: "n_3ds", label: "Nintendo 3DS" },
    { value: "x_xbox", label: "Xbox" },
    { value: "x_360", label: "Xbox 360" },
    { value: "ps_ps1", label: "Playstation" },
    { value: "ps_ps2", label: "Playstation 2" },
    { value: "ps_ps4", label: "Playstation 4" },
    { value: "pc", label: "PC" },
    {
      value: "mobile",
      label: "Mobile (Apple/Android)"
    }
  ];
  const mediaArry = [
    { value: "physical", label: "Physical" },
    { value: "digital", label: "Digital" },
    { value: "emulation", label: "Emulation" }
  ];
  let { title } = $$props;
  let { console_settings } = $$props;
  let { game_info } = $$props;
  if ($$props.consoleArry === void 0 && $$bindings.consoleArry && consoleArry !== void 0)
    $$bindings.consoleArry(consoleArry);
  if ($$props.mediaArry === void 0 && $$bindings.mediaArry && mediaArry !== void 0)
    $$bindings.mediaArry(mediaArry);
  if ($$props.prettLabel === void 0 && $$bindings.prettLabel && prettLabel !== void 0)
    $$bindings.prettLabel(prettLabel);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.console_settings === void 0 && $$bindings.console_settings && console_settings !== void 0)
    $$bindings.console_settings(console_settings);
  if ($$props.game_info === void 0 && $$bindings.game_info && game_info !== void 0)
    $$bindings.game_info(game_info);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_2dda268c.e)(title)} ${(0, import_index_2dda268c.e)(import_store_46d56786.s.title)}</title>`, ""}`, ""}

<div class="${"game"}"><img${(0, import_index_2dda268c.f)("src", game_info.banner, 0)} alt="${""}">
  <h1>${(0, import_index_2dda268c.e)(title)}</h1>

  <h2>Console settings</h2>
  <ul><li><strong>Played on:</strong> ${(0, import_index_2dda268c.e)(prettLabel(console_settings.console[0], consoleArry))}</li>
    <li><strong>Media type:</strong> ${(0, import_index_2dda268c.e)(prettLabel(console_settings.play_method, mediaArry))}</li></ul>

  <h2>Game info</h2>
  ${(0, import_index_2dda268c.d)(game_info.times_played, (play) => `<p>Played in <strong>${(0, import_index_2dda268c.e)(play.date_year)}</strong> for
      <strong>${(0, import_index_2dda268c.e)(play.time_played.play_time_hours)}</strong> hours
    </p>`)}
  <p>Rating: ${(0, import_index_2dda268c.e)(game_info.rating)}</p>

  <div class="${"content"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
