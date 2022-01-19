<!-- games/index.svelte -->
<script>
  import { seo } from '$lib/store.js';
  import GameList from '$lib/components/GameList.svelte';
</script>

<svelte:head>
  <title>Games {seo.title}</title>
</svelte:head>

<h1>Games</h1>

<GameList />
