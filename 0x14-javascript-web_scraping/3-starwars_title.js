#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const endPoint = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request({ url: endPoint, method: 'GET' }, (err, response, body) => {
  if (err) {
    console.error(err); // Use console.error for error logging
  }

  try {
    const data = JSON.parse(body);
    console.log(data.title);
  } catch (parseError) {
    console.error(parseError); // Handle JSON parsing errors
  }
});
