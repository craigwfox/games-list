// stats.json.js
export const get = async () => {
  const allGameFiles = import.meta.glob('../games/*.md');
  const iterableGameFiles = Object.entries(allGameFiles);

  let playedByYear = [];

  // ===------ takes an array and checks it's children for a match ------===
  const includesChild = (arry, val, title) => {
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

  const getCountByYear = await Promise.all(
    iterableGameFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const timesPlayed = metadata.game_info.times_played;

      timesPlayed.forEach((time) => {
        const date = time.date_year.trim();

        if (includesChild(playedByYear, date, metadata.title)[0]) {
          const statsPos = includesChild(playedByYear, date, metadata.title)[1];
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
      years: playedByYear,
      consoles: []
    }
  };
};
