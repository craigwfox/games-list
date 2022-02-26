<script>
  // Imports
  import { format } from '$lib/formating';

  // Component props
  export let game;
  export let index;
</script>

<article class="game-card">
  <a href={game.path}>
    <h2 id={`title-${index}`} class="gc__title">
      {game.meta.title}
    </h2>
    <img
      class="gc__img"
      src={game.meta.game_info.poster}
      alt={`Game cover for ${game.meta.title}`}
    />
    <ul class="gc__details">
      <li>
        <strong>Played on</strong>
        {format.prettyLabel(
          game.meta.console_settings.console[0],
          format.consoleArry
        )}
      </li>
      <li>
        {#if game.meta.play_status === 'false'}
          <span class="gc__details_playing">Currently playing</span>
        {:else}
          <strong>Played in</strong>
          {#each game.meta.game_info.times_played as play}
            <span>{play.date_year}</span>
          {/each}
        {/if}
      </li>
    </ul>
  </a>
</article>
