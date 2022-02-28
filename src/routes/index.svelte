<script context="module">
  export const load = async ({ fetch }) => {
    const stats = await fetch('/api/stats.json');
    const allStats = await stats.json();

    return {
      props: {
        stats: allStats
      }
    };
  };
</script>

<script>
  // ====---------------====
  // Imports
  // ====---------------====
  import { seo } from '$lib/store.js';

  // ====---------------====
  // Variables
  // ====---------------====
  export let stats;
</script>

<svelte:head>
  <title>Home {seo.title}</title>
</svelte:head>

<h1 id="recent-games">Recent games</h1>

<h2>Play totals by year</h2>
<table>
  <tbody>
    {#each stats.years as year}
      <tr>
        <th scope="row">{year.label}</th>
        <td>{year.count}</td>
      </tr>
    {/each}
  </tbody>
</table>
