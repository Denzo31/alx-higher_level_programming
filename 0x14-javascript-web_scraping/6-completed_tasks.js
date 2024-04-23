#!/usr/bin/node

const request = require('request');

request(process.argv[2], function (error, res, body) {
  if (error) {
    console.log(error);
  } else {
    const result = JSON.parse(body);
    const users = {};
    result.forEach(element => {
      if (element.completed) {
	if (!(element.userId in users)) {
	  users[element.userId] = 1;
	} else {
	  users[element.userId] += 1;
	}
      }
    });
    console.log(users);
  }
});
