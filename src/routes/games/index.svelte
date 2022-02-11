<!-- games/index.svelte -->

<script context="module">
  export const load = async ({ fetch }) => {
    const games = await fetch('/api/games.json')
    const allGames = await games.json()

    return {
      props: {
        games: allGames
      }
    }
  }
</script>

<script>
  // Imports
  import { seo } from '$lib/store.js';
  import GameCard from '$lib/components/GameCard.svelte';

  // Setting up vars
  export let games
</script>

<svelte:head>
  <title>Games {seo.title}</title>
</svelte:head>

<h1>Games</h1>

<div class="games-wrapper">
  {#each games as game, i}
    <GameCard game={game} id={i} />
  {/each}
</div>
