#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
const dataToWrite = process.argv[3];

fs.writeFile(filePath, dataToWrite, 'utf8', err => {
  if (err) {
    console.error(err); // Use console.error for error logging
    return; // Exit early if there's an error
  }
});
