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

  let statBase = 0;
  function getTopStat() {
    stats.consoles.forEach((gc) => {
      if (gc.total > statBase) statBase = gc.total;
    });
  }
  getTopStat();
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
    <h2 id="title-console">Console total</h2>
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
        <div class="bc--{gc.label}">
          <h3>{format.shortLabel(gc.label, format.consoleArry)}</h3>
          <h4 style="height: {(gc.total / statBase) * 100}%;">
            <span>{gc.total}</span>
          </h4>
        </div>
      {/each}
    </div>
  </section>
</div>
