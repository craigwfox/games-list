export const format = {
  consoleArry: [
    { value: 'n_nes', label: 'Nintendo Entertainment System' },
    { value: 'n_snes', label: 'Super Nintendo Entertainment System' },
    { value: 'n_n64', label: 'Nintendo 64' },
    { value: 'n_gamecube', label: 'Nintendo Gamecube' },
    { value: 'n_wii', label: 'Nintendo Wii' },
    { value: 'n_switch', label: 'Nintendo Switch' },
    { value: 'n_ds', label: 'Nintendo DS' },
    { value: 'n_3ds', label: 'Nintendo 3DS' },
    { value: 'x_xbox', label: 'Xbox' },
    { value: 'x_360', label: 'Xbox 360' },
    { value: 'ps_ps1', label: 'Playstation' },
    { value: 'ps_ps2', label: 'Playstation 2' },
    { value: 'ps_ps4', label: 'Playstation 4' },
    { value: 'pc', label: 'PC' },
    { value: 'mobile', label: 'Mobile (Apple/Android)' }
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
  slug: function (string) {
    const regexSpaces = /\s+/g;
    const regexSpecial = /[^a-zA-Z0-9 ]/g;

    return string
      .replace(regexSpecial, '')
      .replace(regexSpaces, '-')
      .toLowerCase();
  }
};
