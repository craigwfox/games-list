<script>
  import { onMount } from 'svelte';

  // ====---------------====
  // Vars
  // ====---------------====
  $: curPage = 1;
  let pageLen = 15;
  let games = [];
  $: gameTotal = 0;
  $: pageCount = [];
  $: filterStart = pageLen * curPage - pageLen;
  $: filterEnd = pageLen * curPage;
  $: gamesFiltered = games;

  // this is the array of games that is displayed currently on the page.
  // It will update any time the curPage, filterStart, filterEnd, or gamesFiltered are updated
  $: gamesFilteredPage = gamesFiltered.slice(filterStart, filterEnd);

  // ====---------------====
  // Helper funcs
  // ====---------------====
  const sortYears = (a, b) => {
    let c = a === 'Legacy' ? '1900' : a;
    let d = b === 'Legacy' ? '1900' : b;

    if (c < d) {
      return 1;
    }
    if (c > d) {
      return -1;
    }
    return 0;
  };

  // ====---------------====
  // Methods for content display
  // ====---------------====
  // loops over the console array and finds the pretty label for the console ids
  const consoleArry = [
    { value: 'n_nes', label: 'Nintendo Entertainment System' },
    { value: 'n_snes', label: 'Super Nintendo Entertainment System' },
    { value: 'n_n64', label: 'Nintendo 64' },
    { value: 'n_gamecube', label: 'Nintendo Gamecube' },
    { value: 'n_wii', label: 'Nintendo Wii' },
    { value: 'n_switch', label: 'Nintendo Switch' },
    { value: 'n_ds', label: 'Nintendo DS' },
    { value: 'n_3ds', label: 'Nintendo 3DS' },
    { value: 'x_xbox', label: 'Xbox' },
    { value: 'x_360', label: 'Xbox 360' },
    { value: 'ps_ps1', label: 'Playstation' },
    { value: 'ps_ps2', label: 'Playstation 2' },
    { value: 'ps_ps4', label: 'Playstation 4' },
    { value: 'pc', label: 'PC' },
    { value: 'mobile', label: 'Mobile (Apple/Android)' }
  ];
  function prettLabel(cpName, cpArry) {
    let prettyName = cpName;

    cpArry.forEach((element) => {
      cpName === element.value ? (prettyName = element.label) : prettyName;
    });

    return prettyName;
  }

  // ====---------------====
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
    const pageHref = event.target.getAttribute('href');
    curPage = pageHref;
  }

  // ====---------------====
  // Category filtering
  // ====---------------====

  // ====---------------====
  // Console filtering
  // ====---------------====

  // ====---------------====
  // Year filtering
  // ====---------------====

  // set's up an array or years to populate the years array
  $: yearList = [];
  function getYears() {
    let yearArry = [];
    // loops over each game, finds the array of timesplayed and then gathers the year while checking against the yearArry
    games.forEach((game) => {
      game.meta.game_info.times_played.forEach((timePlayed) => {
        if (!yearArry.includes(timePlayed.date_year)) yearArry.push(timePlayed.date_year);
      });
    });
    yearList = yearArry.sort(sortYears);
  }

  function yearMatch(playArry, checkVal) {
    return playArry.some((item) => (item.date_year === checkVal ? true : false));
  }

  // watchs the year select for on change
  function filterByYear(event) {
    const selectedYear = event.target.value;

    if (selectedYear != 'all') {
      gamesFiltered = games.filter((game) =>
        yearMatch(game.meta.game_info.times_played, selectedYear)
      );
    } else {
      gamesFiltered = games;
    }

    countPages();
  }

  // ====---------------====
  // On Mount
  // ====---------------====
  onMount(async () => {
    // fetch all games
    const response = await fetch('/api/games.json');
    const res = await response.json();
    games = await res;

    // get total games and get some pagination going
    gameTotal = await res.length;

    await countPages();
    await getYears();
  });
</script>

<div class="filters">
  <div class="form">
    <label for="filterByYear">Filter by year</label>
    <select name="filterByYear" id="filterByYear" on:change={filterByYear}>
      <option value="all">All years</option>
      {#each yearList as year}
        <option value={year}>{year}</option>
      {/each}
    </select>
  </div>
</div>
<p>Showing {gamesFilteredPage.length} of {gamesFiltered.length}</p>

{#each gamesFilteredPage as game}
  <article>
    <h2>
      <a href={game.path}>
        {game.meta.title}
      </a>
    </h2>
    <!-- <img src={game.meta.game_info.poster} alt="" /> -->
    <ul>
      <li>
        <strong>Played on</strong>
        {prettLabel(game.meta.console_settings.console[0], consoleArry)}
      </li>
      <li>
        <strong>Played in</strong>
        {#each game.meta.game_info.times_played as play}
          <span>{play.date_year}</span>
        {/each}
      </li>
    </ul>
  </article>
{/each}

<ul class="pagination">
  {#each pageCount as pageNum}
    <li><a href={pageNum} on:click={changePage}>{pageNum}</a></li>
  {/each}
</ul>
