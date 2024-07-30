#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const myDict = {};

request(url, (err, response, body) => {
  if (err) {
    console.error(err); // Use console.error for error logging
  }

  try {
    const data = JSON.parse(body);

    data.forEach(task => {
      if (task.completed) {
        if (myDict[task.userId] === undefined) {
          myDict[task.userId] = 1;
        } else {
          myDict[task.userId] += 1;
        }
      }
    });

    // Only print users with completed tasks
    console.log(myDict);
  } catch (parseError) {
    console.error(parseError); // Handle JSON parsing errors
  }
});
