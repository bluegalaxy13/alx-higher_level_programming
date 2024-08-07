#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const path = process.argv[3];

request(url, (err, response, body) => {
  if (err) {
    console.error(err); // Log error if request fails
  }

  fs.writeFile(path, body, 'utf8', err => {
    if (err) {
      console.error(err); // Log error if file writing fails
    }
  });
});
