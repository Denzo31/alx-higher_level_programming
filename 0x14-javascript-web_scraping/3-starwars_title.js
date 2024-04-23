#!/usr/bin/node

const request = require('request');

request('https://swapi-api.alx-tools.com/api/films/' + process.argv[2], function (error, res, body) {
  if (error) {
    console.log(error);
  } else {
    const result = JSON.parse(body);

    console.log(result.title);
  }
});
