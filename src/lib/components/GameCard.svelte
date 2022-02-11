<script>
  // Setting up vars
  export let game
  export let id
</script>

<article class="game-card">
  <a href={game.path}>
    <h2 id={`title-${id}`} class="gc__title">
      {game.meta.title}
    </h2>
    <img class="gc__img" src={game.meta.game_info.poster} alt={`Game cover for ${game.meta.title}`} />
    <ul class="gc__details">
      <li>
        <strong>Played on</strong>
        <!-- {prettLabel(game.meta.console_settings.console[0], consoleArry)} -->
      </li>
      <li>
        <strong>Played in</strong>
        {#each game.meta.game_info.times_played as play}
        <span>{play.date_year}</span>
        {/each}
      </li>
    </ul>
  </a>
</article>
