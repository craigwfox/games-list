<script>
  import { seo } from '$lib/store.js';
  export const consoleArry = [
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
  ];
  export const mediaArry = [
    { value: 'physical', label: 'Physical' },
    { value: 'digital', label: 'Digital' },
    { value: 'emulation', label: 'Emulation' }
  ];
  export function prettLabel(cpName, cpArry) {
    let prettyName = cpName;

    cpArry.forEach((element) => {
      cpName === element.value ? (prettyName = element.label) : prettyName;
    });

    return prettyName;
  }

  export let title;
  export let console_settings;
  export let game_info;
</script>

<svelte:head>
  <title>{title} {seo.title}</title>
</svelte:head>

<div class="game">
  <img src={game_info.banner} alt="" />
  <h1>{title}</h1>

  <h2>Console settings</h2>
  <ul>
    <li><strong>Played on:</strong> {prettLabel(console_settings.console[0], consoleArry)}</li>
    <li><strong>Media type:</strong> {prettLabel(console_settings.play_method, mediaArry)}</li>
  </ul>

  <h2>Game info</h2>
  {#each game_info.times_played as play}
    <p>
      Played in <strong>{play.date_year}</strong> for
      <strong>{play.time_played.play_time_hours}</strong> hours
    </p>
  {/each}
  <p>Rating: {game_info.rating}</p>

  <div class="content">
    <slot />
  </div>
</div>
