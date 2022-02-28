// stats.json.js
export const get = async () => {
  const allGameFiles = import.meta.glob('../games/*.md');
  const iterableGameFiles = Object.entries(allGameFiles);

  let stats = [];

  // ===------ takes an array and checks it's children for a match ------===
  const includesChild = (arry, val) => {
    let match = false;
    arry.forEach((child) => {
      if (child.hasOwnProperty(val)) {
        console.log(child);
        match = true;
        return true;
      }
    });
    return match;
  };

  const allStats = await Promise.all(
    iterableGameFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const date = metadata.game_info.times_played[0].date_year;

      if (includesChild(stats, date)) {
        console.log('has match');
        stats[date].count++;
      } else {
        stats.push({
          label: [date][0],
          count: 1
        });
      }
    })
  );

  return {
    body: {
      years: stats,
      consoles: []
    }
  };
};
