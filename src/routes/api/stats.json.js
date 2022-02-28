// stats.json.js
export const get = async () => {
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

  return {
    body: allGames
  };
};
