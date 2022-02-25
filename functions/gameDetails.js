exports.handler = async function (event, context) {
  try {
    const { game } = event.queryStringParameters;
    const API_URL = `https://api.rawg.io/api/games/${game}?key=${process.env.VITE_API_KEY}`;
    const response = await fetch(API_URL);
    return {
      statusCode: 200,
      body: response.toString()
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: `Gamedetails ${err.toString()}`
    };
  }
};
