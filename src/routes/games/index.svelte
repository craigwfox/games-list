<!-- games/index.svelte -->
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
  // imports
  // ====---------------====
  import { seo } from '$lib/store.js';
  import { format } from '$lib/formating';
  import GameCard from '$lib/components/GameCard.svelte';
  import { onMount } from 'svelte';

  // ====---------------====
  // Props
  // ====---------------====
  export let games;

  // ====---------------====
  // Vars
  // ====---------------====
  $: gamesFiltered = games;
  $: currentYear = 'all';
  $: currentConsole = 'all';

  let pageLen = 15;
  $: curPage = 1;
  $: pageCount = [];
  $: filterStart = pageLen * curPage - pageLen;
  $: filterEnd = pageLen * curPage;
  $: gamesFilteredPage = gamesFiltered.slice(filterStart, filterEnd);

  // ====---------------====
  // Pagination
  // Paginates games, by updating the curPage which filters the games
  // ====---------------====
  // gets the current amount of pages to create the pagination
  function countPages() {
    curPage = 1;

    let newArry = [];
    for (let i = 1; i <= Math.ceil(gamesFiltered.length / pageLen); i++) {
      newArry.push(i);
    }

    pageCount = newArry;
  }

  // changes the page
  function changePage(event) {
    event.preventDefault();
    const pageNum = event.target.getAttribute('data-pageNumber');
    curPage = parseInt(pageNum);
  }

  // set's up an array or years to populate the years array
  $: yearList = [];
  function getYears() {
    let yearArry = [];
    // loops over each game, finds the array of timesplayed and then gathers the year while checking against the yearArry
    games.forEach((game) => {
      game.meta.game_info.times_played.forEach((timePlayed) => {
        if (!yearArry.includes(timePlayed.date_year))
          yearArry.push(timePlayed.date_year);
      });
    });
    yearList = yearArry.sort(format.sortYears);
  }

  function yearMatch(playArry, checkVal) {
    return playArry.some((item) =>
      item.date_year === checkVal ? true : false
    );
  }

  // watchs the year select for on change
  function filterByYear() {
    if (currentYear != 'all') {
      gamesFiltered = games.filter((game) =>
        yearMatch(game.meta.game_info.times_played, currentYear)
      );
    } else {
      gamesFiltered = games;
    }
  }

  // ====---------------====
  // Console filtering
  // ====---------------====
  // creates an arry of consoles to populate the filters menu and allow for filtering of results
  $: consoleList = [];
  function getConsoles() {
    console.log('getting consoles');
    let gcArry = [];

    games.forEach((game) => {
      if (!gcArry.includes(game.meta.console_settings.console[0]))
        gcArry.push(game.meta.console_settings.console[0]);
    });

    consoleList = gcArry;
  }

  function gcMatch(a, b) {
    return a === b ? true : false;
  }

  // Runs when the console filter is changed
  function filterByConsole() {
    // we will fiter this based off the gamesFiltered list since it's going to be filtering after running the year filter
    if (currentConsole != 'all') {
      gamesFiltered = gamesFiltered.filter((game) =>
        gcMatch(game.meta.console_settings.console[0], currentConsole)
      );
    }
  }

  // ====---------------====
  // Filter games - Runs all filters
  // ====---------------====
  function runFilters() {
    // runs the filters asynchronous this way the filters are overwriting each other
    new Promise((resolve, reject) => {
      currentYear = document.querySelector('#filterByYear').value;
      currentConsole = document.querySelector('#filterByConsole').value;
      filterByYear();
      resolve();
    })
      .then(() => {
        filterByConsole();
      })
      .then(() => {
        countPages();
      });
  }

  // ====---------------====
  // On Mount
  // ====---------------====
  onMount(() => {
    getYears();
    getConsoles();
    countPages();
  });
</script>

<svelte:head>
  <title>Games {seo.title}</title>
</svelte:head>

<h1>Games</h1>

{#if yearList.length > 0}
  <div class="filters">
    <div class="form">
      <label for="filterByYear">Filter by year</label>
      <select
        name="filterByYear"
        id="filterByYear"
        value={currentYear}
        on:change={runFilters}
      >
        <option value="all">All years</option>
        {#each yearList as year}
          <option value={year}>{year}</option>
        {/each}
      </select>
    </div>
    <div class="form">
      <label for="filterByConsole">Filter by console</label>
      <select
        name="filterByConsole"
        id="filterByConsole"
        value={currentConsole}
        on:change={runFilters}
      >
        <option value="all">All consoles</option>
        {#each consoleList as gConsole}
          <option value={gConsole}
            >{format.prettyLabel(gConsole, format.consoleArry)}</option
          >
        {/each}
      </select>
    </div>
  </div>
{/if}

<h2>Showing {gamesFiltered.length}</h2>

<ul class="pagination">
  {#each pageCount as pageNum}
    <li>
      <button
        class={curPage === pageNum ? 'active' : ''}
        data-pageNumber={pageNum}
        on:click={changePage}
      >
        {pageNum}
      </button>
    </li>
  {/each}
</ul>

<div class="games-wrapper">
  {#each gamesFilteredPage as game, i}
    <GameCard {game} index={i} />
  {/each}
</div>
