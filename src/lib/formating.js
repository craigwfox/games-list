export const format = {
  consoleArry: [
    { value: 'n_nes', label: 'Nintendo Entertainment System', short: 'NES' },
    {
      value: 'n_snes',
      label: 'Super Nintendo Entertainment System',
      short: 'SNES'
    },
    { value: 'n_n64', label: 'Nintendo 64', short: 'N64' },
    { value: 'n_gamecube', label: 'Nintendo Gamecube', short: 'Gamecube' },
    { value: 'n_wii', label: 'Nintendo Wii', short: 'Wii' },
    { value: 'n_switch', label: 'Nintendo Switch', short: 'Switch' },
    { value: 'n_ds', label: 'Nintendo DS', short: 'DS' },
    { value: 'n_3ds', label: 'Nintendo 3DS', short: '3DS' },
    { value: 'x_xbox', label: 'Xbox', short: 'Xbox' },
    { value: 'x_360', label: 'Xbox 360', short: 'X360' },
    { value: 'ps_ps1', label: 'Playstation', short: 'PSX' },
    { value: 'ps_ps2', label: 'Playstation 2', short: 'PS2' },
    { value: 'ps_ps4', label: 'Playstation 4', short: 'PS4' },
    { value: 'pc', label: 'PC', short: 'PC' },
    { value: 'mobile', label: 'Mobile (Apple/Android)', short: 'Mobile' }
  ],
  mediaArry: [
    { value: 'physical', label: 'Physical' },
    { value: 'digital', label: 'Digital' },
    { value: 'emulation', label: 'Emulation' }
  ],
  ratingsArry: [
    {
      label: 'Bad',
      value: 'bad'
    },
    {
      label: 'Meh',
      value: 'meh'
    },
    {
      label: 'Good',
      value: 'good'
    },
    {
      label: 'Great',
      value: 'great'
    },
    {
      label: 'Personal Favorite',
      value: 'goat'
    }
  ],
  prettyLabel: function (cpName, cpArry) {
    let prettyName = cpName;

    cpArry.forEach((element) => {
      cpName === element.value ? (prettyName = element.label) : prettyName;
    });

    return prettyName;
  },
  shortLabel: function (cpName, cpArry) {
    let prettyName = cpName;

    cpArry.forEach((element) => {
      cpName === element.value ? (prettyName = element.short) : prettyName;
    });

    return prettyName;
  },
  slug: function (string) {
    const regexSpaces = /\s+/g;
    const regexSpecial = /[^a-zA-Z0-9 ]/g;

    return string
      .replace(regexSpecial, '')
      .replace(regexSpaces, '-')
      .toLowerCase();
  },
  sortYears: (a, b) => {
    // filter for sorting years
    let c = a === 'Legacy' ? '1900' : a;
    let d = b === 'Legacy' ? '1900' : b;

    if (c < d) {
      return 1;
    }
    if (c > d) {
      return -1;
    }
    return 0;
  }
};
