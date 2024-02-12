#!/usr/bin/node
const count = process.argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
// count === 2 is No Argument
// count === 3 is 1 Argument
// count === more than 3 is multiple Arguments
