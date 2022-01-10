// games.json.js
export async function get() {
  const allGameFiles = import.meta.glob('../games/*.md');
  const iterableGameFiles = Object.entries(allGameFiles);

  const allGames = await Promise.all(
    iterableGameFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const GamePath = path.slice(2, -3);

      return {
        meta: metadata,
        path: GamePath
      };
    })
  );

  const gameCount = await allGames.length;
  const pageCount = await Math.round(gameCount / 10);

  const headers = {
    'x-total-games': gameCount,
    'x-total-pages': pageCount
  };

  return {
    headers: headers,
    status: 200,
    body: allGames
  };
}
