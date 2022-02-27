<script context="module">
  export const load = async ({ fetch }) => {
    const games = await fetch('/api/games.json');
    const allGames = await games.json();

    return {
      props: {
        games: allGames
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
  export let games;

  // ====---------------====
  // Helpers
  // ====---------------====

  // ===------ takes an array and checks it's children for a match ------===
  const includesChild = (arry, val) => {
    let match = false;
    arry.some((child) => {
      if (child.includes(val)) {
        match = true;
        return true;
      }
    });
    return match;
  };

  // ====---------------====
  // Gamecount by years
  // ====---------------====
  const gcYears = [];
  const gameCountYear = () => {
    games.forEach((game) => {
      const firstYear =
        game.meta.game_info.times_played[0].date_year.toLowerCase();

      if (includesChild(gcYears, firstYear)) {
        let pos;
        gcYears.some((child, index) => {
          pos = index;
        });
        gcYears[pos][1] = gcYears[pos][1] + 1;
      } else {
        gcYears.push([firstYear, 1]);
      }
    });
  };
  gameCountYear();
</script>

<svelte:head>
  <title>Home {seo.title}</title>
</svelte:head>

<h1 id="recent-games">Recent games</h1>

<h2>Play totals by year</h2>
<table>
  <tbody>
    {#each gcYears as year}
      <tr>
        <th scope="row">{year[0]}</th>
        <td>{year[1]}</td>
      </tr>
    {/each}
  </tbody>
</table>
