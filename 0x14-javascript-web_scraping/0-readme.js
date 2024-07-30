#!/usr/bin/node

const filePath = process.argv[2];
const fs = require('fs');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return; // Add return to exit early if there's an error
  }

  console.log(data);
});
