// stats.json.js
export const get = async () => {
  const allGameFiles = import.meta.glob('../games/*.md');
  const iterableGameFiles = Object.entries(allGameFiles);

  // ====---------------====
  //
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

  let playedByYear = [];
  await Promise.all(
    iterableGameFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();

      // ====---------------====
      // Loops over the times played for each game to get a game count by year
      // ====---------------====
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
    })
  );

  return {
    body: {
      years: playedByYear.sort(sortYears),
      consoles: []
    }
  };
};
