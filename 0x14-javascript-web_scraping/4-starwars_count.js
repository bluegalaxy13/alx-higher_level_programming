#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.error(err); // Use console.error for error logging
  }

  let counter = 0;
  try {
    const films = JSON.parse(body).results;
    for (let i = 0; i < films.length; i++) {
      const characters = films[i].characters;
      if (characters.some(char => char.includes('/18/'))) {
        counter += 1;
      }
    }

    console.log(counter);
  } catch (parseError) {
    console.error(parseError); // Handle JSON parsing errors
  }
});
