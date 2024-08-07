#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, response) => {
  if (err) {
    console.error(err); // Use console.error for error logging
  }

  console.log('code: ' + response.statusCode);
});
