#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const endPoint = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request.get(endPoint, (err, response, body) => {
  if (err) {
    console.error(err); // Use console.error for error logging
  }

  if (response.statusCode === 200) {
    try {
      const characters = JSON.parse(body).characters;

      characters.forEach(characterUrl => {
        request.get(characterUrl, (err, response, body) => {
          if (err) {
            console.error(err); // Use console.error for error logging
          }

          if (response.statusCode === 200) {
            try {
              const characterName = JSON.parse(body).name;
              console.log(characterName);
            } catch (parseError) {
              console.error(parseError); // Handle JSON parsing errors for character data
            }
          }
        });
      });
    } catch (parseError) {
      console.error(parseError); // Handle JSON parsing errors for film data
    }
  }
});
