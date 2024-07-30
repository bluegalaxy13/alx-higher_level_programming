#!/usr/bin/node

const fs = require('fs');

fs.writeFile(process.argv[2], process.argv[3], err => {
  if (err) {
    console.log(err);
    return; // Added return to exit early if there's an error
  }
});
