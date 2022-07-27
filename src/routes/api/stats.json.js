// stats.json.js
export const get = async () => {
  const allGameFiles = import.meta.glob('../games/*.md');
  const iterableGameFiles = Object.entries(allGameFiles);

  // ====---------------====
  // Vars
  // ====---------------====
  let playedByYear = [];
  let playedByConsole = [];

  // ====---------------====
  // Helpers
  // ====---------------====
  // ===------ takes an array and checks it's children for a match ------===
  const includesChild = (arry, val) => {
    let match = false;
    let pos = null;
    arry.forEach((child, index) => {
      if (child.label === val) {
        match = true;
        pos = index;
        return true;
      }
    });
    return [match, pos];
  };

  const sortYears = (a, b) => {
    // filter for sorting years
    let c = a.label === 'Legacy' ? '1900' : a.label;
    let d = b.label === 'Legacy' ? '1900' : b.label;

    if (c < d) {
      return 1;
    }
    if (c > d) {
      return -1;
    }
    return 0;
  };

  const sortConsoles = (a, b) => {
    // filter for sorting years
    let c = a.label;
    let d = b.label;

    if (c < d) {
      return 1;
    }
    if (c > d) {
      return -1;
    }
    return 0;
  };

  // ====---------------====
  // Get play count by year
  // ====---------------====

  // Loops over the times played for each game to get a game count by year
  function getYearCount(metadata) {
    const timesPlayed = metadata.game_info.times_played;
    timesPlayed.forEach((time) => {
      const date = time.date_year.trim();

      // checks if the date is already in the "playedByYears" array
      // if it is it bumps the count by one and if not it pushes a new item to the array
      if (includesChild(playedByYear, date)[0]) {
        const statsPos = includesChild(playedByYear, date)[1];
        const statsCount = playedByYear[statsPos].count;
        playedByYear[statsPos].count = statsCount + 1;
      } else {
        playedByYear.push({
          label: date,
          count: 1
        });
      }
    });
  }

  // ====---------------====
  // Get console count
  // Will be a list of consoles with number of games by year
  // ====---------------====
  function getConsoleCount(metadata) {
    const gc = metadata.console_settings.console[0];
    const gcYears = metadata.game_info.times_played;

    function years(count) {
      let yearArry = [];
      gcYears.forEach((play) => {
        yearArry.push({
          label: play.date_year,
          count: count
        });
      });
      return yearArry.sort(sortYears);
    }

    if (includesChild(playedByConsole, gc)[0]) {
      const gcPos = includesChild(playedByConsole, gc)[1];

      // loop current games years ->
      // then check that arry of years against the console's years
      gcYears.forEach((year) => {
        if (includesChild(playedByConsole[gcPos].years, year.date_year)[0]) {
          const yearPos = includesChild(
            playedByConsole[gcPos].years,
            year.date_year
          )[1];

          playedByConsole[gcPos].years[yearPos].count++;
        } else {
          playedByConsole[gcPos].years.push({
            label: year.date_year,
            count: 1
          });
        }
      });

      // bumps total games played on console count
      playedByConsole[gcPos].total++;
    } else {
      playedByConsole.push({
        label: gc,
        years: years(1),
        total: 1
      });
    }
  }

  await Promise.all(
    iterableGameFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();

      await getYearCount(metadata);
      await getConsoleCount(metadata);
      await playedByConsole.forEach((gc) => {
        gc.years.sort(sortYears);
      });
      await playedByConsole.sort(sortConsoles);
    })
  );

  return {
    body: {
      years: playedByYear.sort(sortYears),
      consoles: playedByConsole
    }
  };
};
