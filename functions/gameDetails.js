exports.handler = async function (event, context) {
  try {
    const { game } = event.queryStringParameters;
    console.log(context);
    const API_URL = `https://api.rawg.io/api/games/${game}?key=${process.env.VITE_API_KEY}`;
    const response = await fetch(API_URL);
    const res = await response.json();
    const data = await res;

    return {
      statusCode: 200,
      body: data
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString()
    };
  }
};
