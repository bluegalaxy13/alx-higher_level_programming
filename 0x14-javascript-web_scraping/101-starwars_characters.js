#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const endPoint = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request.get(endPoint, (err, response, body) => {
  if (err) {
    console.error(err); // Use console.error for error logging
  }

  if (response.statusCode === 200) {
    let characters;
    try {
      characters = JSON.parse(body).characters;
    } catch (parseError) {
      console.error(parseError); // Handle JSON parsing errors for film data
    }

    // Create an array of promises for character requests
    const characterPromises = characters.map(characterUrl =>
      new Promise((resolve, reject) => {
        request.get(characterUrl, (err, response, body) => {
          if (err) {
            reject(err);
          } else if (response.statusCode === 200) {
            try {
              resolve(JSON.parse(body).name);
            } catch (parseError) {
              reject(parseError); // Handle JSON parsing errors for character data
            }
          } else {
            reject(new Error(`Failed to load character data, status code: ${response.statusCode}`));
          }
        });
      })
    );

    // Wait for all promises to resolve and then print the names
    Promise.all(characterPromises)
      .then(names => names.forEach(name => console.log(name)))
      .catch(err => console.error(err)); // Handle errors from Promise.all
  } else {
    console.error(`Failed to load film data, status code: ${response.statusCode}`);
  }
});
