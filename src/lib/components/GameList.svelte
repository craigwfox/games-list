<script>
  import { onMount } from 'svelte';

  // ====---------------====
  // Vars
  // ====---------------====
  let pageLen = 15;
  $: curPage = 1;
  let games = []; // this is never modified after the intial load, only change the gamesfilted value
  $: pageCount = [];
  $: filterStart = pageLen * curPage - pageLen;
  $: filterEnd = pageLen * curPage;
  $: gamesFiltered = games;
  $: currentYear = 'all';
  $: currentConsole = 'all';

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

    console.log('running yo', gamesFiltered.length)
    pageCount = newArry;
  }

  // changes the page
  function changePage(event) {
    event.preventDefault();
    const pageHref = event.target.getAttribute('href');
    curPage = pageHref;
  }

  // ====---------------====
  // Console filtering
  // ====---------------====
  // creates an arry of consoles to populate the filters menu and allow for filtering of results
  $: consoleList = [];
  function getConsoles() {
    let gcArry = [];

    gamesFiltered.forEach((game) => {
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
  // Year filtering
  // ====---------------====
  // set's up an array or years to populate the years array
  $: yearList = [];
  function getYears() {
    let yearArry = [];
    // loops over each game, finds the array of timesplayed and then gathers the year while checking against the yearArry
    gamesFiltered.forEach((game) => {
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
  // Filter games - Runs all filters
  // ====---------------====
  function runFilters() {
    // runs the filters asynchronous this way the filters are overwriting each other
    new Promise((resolve, reject) => {
      currentYear = document.querySelector('#filterByYear').value;
      currentConsole = document.querySelector('#filterByConsole').value;
      filterByYear();
      getConsoles();
      resolve();
    }).then(() => {
      filterByConsole();
      getYears();
    }).then(() => {
      countPages();
    });
  }

  // ====---------------====
  // On Mount
  // ====---------------====
  onMount(async () => {
    // fetch all games
    const response = await fetch('/api/games.json');
    const res = await response.json();
    games = await res;

    await getYears();
    await getConsoles();
    await countPages();
  });
</script>

<div class="filters">
  <div class="form">
    <label for="filterByYear">Filter by year</label>
    <select name="filterByYear" id="filterByYear" value={currentYear} on:change={runFilters}>
      <option value="all">All years</option>
      {#each yearList as year}
        <option value={year}>{year}</option>
      {/each}
    </select>
  </div>
  <div class="form">
    <label for="filterByConsole">Filter by console</label>
    <select name="filterByConsole" id="filterByConsole" value={currentConsole} on:change={runFilters}>
      <option value="all">All consoles</option>
      {#each consoleList as gConsole}
        <option value={gConsole}>{prettLabel(gConsole, consoleArry)}</option>
      {/each}
    </select>
  </div>
  <p class="filter-results">Showing <span>{gamesFilteredPage.length}</span> of <span>{gamesFiltered.length}</span></p>
</div>

<div class="games-wrapper">
  {#each gamesFilteredPage as game, i}
    <article class="game-card" aria-label={`title-${i}`}>
      <a href={game.path}>
        <h2 id={`title-${i}`} class="gc__title">
          {game.meta.title}
        </h2>
        <img class="gc__img" src={game.meta.game_info.poster} alt={`Game cover for ${game.meta.title}`} />
        <ul class="gc__details">
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
      </a>
    </article>
  {/each}
</div>

<ul class="pagination">
  {#each pageCount as pageNum}
    <li><a href={pageNum} on:click={changePage}>{pageNum}</a></li>
  {/each}
</ul>
