const axios = require('axios');

exports.handler = async function (event) {
  try {
    const { game } = event.queryStringParameters;
    const API_URL = `https://api.rawg.io/api/games/${game}?key=${process.env.VITE_API_KEY}`;
    const response = await axios.get(API_URL);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString()
    };
  }
};
