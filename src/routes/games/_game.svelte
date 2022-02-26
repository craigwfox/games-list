<script>
  // ====---------------====
  // Imports
  // ====---------------====
  import { seo } from '$lib/store.js';
  import { format } from '$lib/formating';
  import { variables } from '$lib/variables';

  // ====---------------====
  // Variables
  // ====---------------====
  export let title;
  export let console_settings;
  export let game_info;

  // ====---------------====
  // Helpers
  // ====---------------====
  function bigImg() {
    document.querySelector('.game-details').classList.toggle('bigger');
  }

  // ====---------------====
  // Get game details from rawg.io
  // ====---------------====
  $: details = 'loading'; // sets details to load state
  async function getDetails() {
    try {
      const response = await fetch(
        `/.netlify/functions/gameDetails?game=${format.slug(title)}`
      );
      details = await response.json();
    } catch (err) {
      details = 'error'; // triggers error
      console.log(`Game.svelte: ${err}`);
    }
  }
  getDetails();
</script>

<svelte:head>
  <title>{title} {seo.title}</title>
</svelte:head>

<div class={`game-details game-details--${game_info.rating}`}>
  <div class="gd__img">
    <img on:click={bigImg} src={game_info.banner} alt="" />
  </div>

  <h1 class="gd__title">{title}</h1>

  <div class="gd__info">
    <h2>My stats</h2>
    <h3>
      Year{#if game_info.times_played.length > 1}s{/if} played
    </h3>
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
      <li>
        <strong>Rating:</strong>
        {format.prettyLabel(game_info.rating, format.ratingsArry)}
      </li>
    </ul>
  </div>

  <div class="gd__console">
    <h2>Played on</h2>
    <ul>
      <li>
        <strong>Platform:</strong>
        {format.prettyLabel(console_settings.console[0], format.consoleArry)}
      </li>
      <li>
        <strong>Media:</strong>
        {format.prettyLabel(console_settings.play_method, format.mediaArry)}
      </li>
    </ul>
  </div>

  {#if details === 'loading'}
    <p class="gd__details gd__details--load">Loading game details...</p>
  {:else if details === 'error'}
    <p class="gd__details gd__details--error">
      There was en error fetching game details.
    </p>
  {:else}
    <div class="gd__details">
      <h2>About the game</h2>
      <ul>
        {#if details.develogenrespers != null}
          <li>
            <strong>Genre:</strong>
            {#each details.genres as genre, index}
              {#if index > 0}, {/if}{genre.name}
            {/each}
          </li>
        {/if}
        <li>
          <strong>ESRB:</strong>
          {#if details.esrb_rating != null}
            {details.esrb_rating.name}
          {:else}
            Not rated
          {/if}
        </li>
        {#if details.developers != null}
          <li>
            <strong>Developer:</strong>
            {#each details.developers as developer, index}
              {#if index > 0}, {/if}
              {developer.name}
            {/each}
          </li>
        {/if}
        {#if details.publishers != null}
          <li>
            <strong>Publisher:</strong>
            {#each details.publishers as publisher, index}
              {#if index > 0}, {/if}{publisher.name}
            {/each}
          </li>
        {/if}
        <li>
          <strong>Release date:</strong>
          {#if details.released != null}
            {details.released}
          {:else}
            Not yet released
          {/if}
        </li>
        {#if details.metacritic != null}
          <li>
            <strong>Metascore:</strong>
            {details.metacritic}
          </li>
        {/if}
        {#if details.website != null}
          <li class="truncate-25">
            <strong>Website:</strong>
            <a href={details.website} rel="noreferrer">{details.website}</a>
          </li>
        {/if}
        {#if details.playtime != null}
          <li>
            <strong>Average Playtime:</strong>
            {details.playtime} hours
          </li>
        {/if}
      </ul>
    </div>
  {/if}

  <div class="gd__notes">
    <slot />
  </div>
</div>
