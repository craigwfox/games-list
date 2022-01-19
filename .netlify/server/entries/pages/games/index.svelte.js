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
  default: () => Games
});
var import_index_2dda268c = __toModule(require("../../../chunks/index-2dda268c.js"));
var import_store_46d56786 = __toModule(require("../../../chunks/store-46d56786.js"));
let pageLen = 15;
function prettLabel(cpName, cpArry) {
  let prettyName = cpName;
  cpArry.forEach((element) => {
    cpName === element.value ? prettyName = element.label : prettyName;
  });
  return prettyName;
}
const GameList = (0, import_index_2dda268c.c)(($$result, $$props, $$bindings, slots) => {
  let curPage;
  let pageCount;
  let filterStart;
  let filterEnd;
  let gamesFiltered;
  let gamesFilteredPage;
  let consoleList;
  let yearList;
  let games = [];
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
  curPage = 1;
  pageCount = [];
  filterStart = pageLen * curPage - pageLen;
  filterEnd = pageLen * curPage;
  gamesFiltered = games;
  gamesFilteredPage = gamesFiltered.slice(filterStart, filterEnd);
  consoleList = [];
  yearList = [];
  return `<div class="${"filters"}"><div class="${"form"}"><label for="${"filterByYear"}">Filter by year</label>
    <select name="${"filterByYear"}" id="${"filterByYear"}"><option value="${"all"}">All years</option>${(0, import_index_2dda268c.d)(yearList, (year) => `<option${(0, import_index_2dda268c.f)("value", year, 0)}>${(0, import_index_2dda268c.e)(year)}</option>`)}</select></div>
  <div class="${"form"}"><label for="${"filterByConsole"}">Filter by console</label>
    <select name="${"filterByConsole"}" id="${"filterByConsole"}"><option value="${"all"}">All consoles</option>${(0, import_index_2dda268c.d)(consoleList, (gConsole) => `<option${(0, import_index_2dda268c.f)("value", gConsole, 0)}>${(0, import_index_2dda268c.e)(prettLabel(gConsole, consoleArry))}</option>`)}</select></div></div>
<p>Showing ${(0, import_index_2dda268c.e)(gamesFilteredPage.length)} of ${(0, import_index_2dda268c.e)(gamesFiltered.length)}</p>

${(0, import_index_2dda268c.d)(gamesFilteredPage, (game) => `<article><h2><a${(0, import_index_2dda268c.f)("href", game.path, 0)}>${(0, import_index_2dda268c.e)(game.meta.title)}
      </a></h2>
    
    <ul><li><strong>Played on</strong>
        ${(0, import_index_2dda268c.e)(prettLabel(game.meta.console_settings.console[0], consoleArry))}</li>
      <li><strong>Played in</strong>
        ${(0, import_index_2dda268c.d)(game.meta.game_info.times_played, (play) => `<span>${(0, import_index_2dda268c.e)(play.date_year)}</span>`)}
      </li></ul>
  </article>`)}

<ul class="${"pagination"}">${(0, import_index_2dda268c.d)(pageCount, (pageNum) => `<li><a${(0, import_index_2dda268c.f)("href", pageNum, 0)}>${(0, import_index_2dda268c.e)(pageNum)}</a></li>`)}</ul>`;
});
const Games = (0, import_index_2dda268c.c)(($$result, $$props, $$bindings, slots) => {
  return `


${$$result.head += `${$$result.title = `<title>Games ${(0, import_index_2dda268c.e)(import_store_46d56786.s.title)}</title>`, ""}`, ""}

<h1>Games</h1>

${(0, import_index_2dda268c.v)(GameList, "GameList").$$render($$result, {}, {}, {})}`;
});
