<!-- games/index.svelte -->
<script context="module">
  export const load = async ({ fetch }) => {
    const games = await fetch('/api/games.json');
    const allgames = await games.json();

    return {
      props: {
        games: allgames
      }
    };
  };
</script>

<script>
  export let games;
</script>

<h1>Games</h1>

<ul>
  {#each games as game}
    <li>
      <h2>
        <a href={game.path}>
          {game.meta.title}
        </a>
      </h2>
      Console: {game.meta.console_settings.console}<br />
      Date played: {game.meta.game_info.times_played[0].date_year}
      <slot />
    </li>
  {/each}
</ul>
