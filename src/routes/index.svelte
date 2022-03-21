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
  import { format } from '$lib/formating';

  // ====---------------====
  // Variables
  // ====---------------====
  export let stats;
</script>

<svelte:head>
  <title>Home {seo.title}</title>
</svelte:head>

<h1 id="recent-games">Game stats</h1>

<div class="game-stats">
  <section aria-labelledby="title-year">
    <h2 id="title-year">By year</h2>
    <table>
      <thead>
        <th>Year</th>
        <th>Count</th>
        <th>Goal</th>
      </thead>
      <tbody>
        {#each stats.years as year}
          <tr>
            <th scope="row">{year.label}</th>
            <td>{year.count}</td>
            <th>--</th>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>

  <section aria-labelledby="title-console">
    <h2 id="title-console">By Console</h2>
    <!-- <table>
      <thead>
        <tr>
          <th />
          {#each stats.consoles as gc}
            <th class={`th--${gc.label}`}
              >{format.shortLabel(gc.label, format.consoleArry)}</th
            >
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each stats.years as year}
          <tr>
            <th scope="row">{year.label}</th>
            {#each stats.consoles as gc}
              <td class={`th--${gc.label}`}>
                {#each gc.years as gcYear}
                  {#if year.label === gcYear.label}
                    {gcYear.count}
                  {/if}
                {/each}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Total</th>
          {#each stats.consoles as gc}
            <td class={`th--${gc.label}`}>{gc.total}</td>
          {/each}
        </tr>
      </tfoot>
    </table> -->
    <div class="bar-graph">
      {#each stats.consoles as gc}
        <h3>{format.shortLabel(gc.label, format.consoleArry)}</h3>
        <h4 data-total={gc.total}>{gc.total}</h4>
      {/each}
    </div>
  </section>
</div>
