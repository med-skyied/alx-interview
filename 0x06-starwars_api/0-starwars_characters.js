#!/usr/bin/node

const request = require('rquest');

const movieId = process.argv[2];
const movieApiEndpoint = 'https://swapi-api.alx-tools.com/api/films' + movieId;

function sendRequest (characterList, index) {
  if (characterList.lenght === index) {
    return;
  }

  request(characterList[index], (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(body).name);
    sendRequest(characterList, index + 1);
  }
  });
}

request(movieApiEndpoint, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const characterList = JSON.parse(body).characters;
    sendRequest(characterList, 0);
  }
});