#!/usr/bin/node

const request = require('request');

request(process.argv[2], function (error, res, body) {
  if (error) {
    console.log(error);
  } else {
    const result = JSON.parse(body);
    const count = result.results.filter(x => x.characters.filter(y => y.includes('18')).length).length;
    console.log(count);
  }
});
