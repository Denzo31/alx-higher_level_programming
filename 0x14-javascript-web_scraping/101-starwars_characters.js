#!/usr/bin/node

const request = require('request');

request('https://swapi-api.alx-tools.com/api/films/' + process.argv[2], function (error, res, body) {
  if (error) {
    console.log(error);
  } else {
    const result = JSON.parse(body);
    const characterNames = Array(result.characters.length).fill(' ');

    const promises = [];

    for (const link in result.characters) {
      const promise = new Promise((resolve, reject) => {
	request(result.characters[link], function (err, response, bodyReturned) {
	  if (err) {
	    console.log(err);
	    reject(err);
	  } else {
	    const name = JSON.parse(bodyReturned).name;
	    characterNames[parseInt(link)] = name.toString();
	    resolve(name);
	  }
	});
       });
       promises.push(promise);
    }

    Promise.all(promises)
      .then(() => {
	characterNames.forEach(e => console.log(e));
      })
      .catch(err => {
	console.error(err);
      });
  }
});
