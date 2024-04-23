#!/usr/bin/node

const request = require('request');
request(process.argv[2], function (error, res, body) {
  if (error) {
    console.log('code: 404');
  } else {
    console.log(`code: ${res.statusCode}`);
  }
});
