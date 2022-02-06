<script context="module">
  import { variables } from '$lib/variables';

  export const load = async ({ fetch }) => {
    const game_id = '3498';
    const API_URL = `https://api.rawg.io/api/games/${game_id}?key=${variables.API_KEY}`;
    const response = await fetch(API_URL);
    const res = await response.json();
    const data = await res;

    return {
      props: {
        game_details: data
      }
    }
  }
</script>

<script>
  // ====---------------====
  // Imports
  // ====---------------====
  import { seo } from '$lib/store.js';

  // ====---------------====
  // Pretty label helpers
  // ====---------------====
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
  export const ratingsArry = [
    {
      label: "Bad",
      value: "bad"
    },
    {
      label: "Meh",
      value: "meh"
    },
    {
      label: "Good",
      value: "good"
    },
    {
      label: "Great",
      value: "great"
    },
    {
      label: "Personal Favorite",
      value: "goat"
    }
  ];
  export function prettLabel(cpName, cpArry) {
    let prettyName = cpName;

    cpArry.forEach((element) => {
      cpName === element.value ? (prettyName = element.label) : prettyName;
    });

    return prettyName;
  }

  // ====---------------====
  // Variables
  // ====---------------====

  export let title;
  export let console_settings;
  export let game_info;
  export let game_details;

  // ====---------------====
  // Helpers
  // ====---------------====
  function bigImg() {
    console.log('clicked')
    document.querySelector('.game-details').classList.toggle('bigger');
  }
</script>

<svelte:head>
  <title>{title} {seo.title}</title>
</svelte:head>

<div class={`game-details game-details--${game_info.rating}`}>
  <div class="gd__img">
    <button on:click={bigImg}>
      <img src={game_info.banner} alt="" />
    </button>
  </div>

  <h1 class="gd__title">{title}</h1>

  <div class="gd__info">
    <h2>My stats</h2>
    <h3>Year{#if game_info.times_played.length > 1}s{/if} played</h3>
    <ul>
      {#each game_info.times_played as play}
        <li>
          <strong>{play.date_year}</strong> for
          <strong>{play.time_played.play_time_hours}</strong> hours
        </li>
      {/each}
    </ul>
    <h3>Other</h3>
    <ul>
      <li><strong>Rating:</strong> {prettLabel(game_info.rating, ratingsArry)}</li>
  </ul>
  </div>

  <div class="gd__console">
    <h2>Played on</h2>
    <ul>
      <li><strong>Device:</strong> {prettLabel(console_settings.console[0], consoleArry)}</li>
      <li><strong>Media:</strong> {prettLabel(console_settings.play_method, mediaArry)}</li>
    </ul>
  </div>

  <div class="gd__details">
    <h2>Details</h2>
    <ul>
      <li><strong>Developer:</strong> CD Project Red</li>
      <li><strong>Genre:</strong> Role-playing (RPG)</li>
      <li><strong>Rating:</strong> 78</li>
    </ul>
  </div>

  <div class="gd__notes">
    <slot />
  </div>
</div>
