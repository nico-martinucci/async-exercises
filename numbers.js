"use strict";

const BASE_URL = "http://numbersapi.com/";

const RANDOM_NUMBERS = "1..3,8"
const FAVORITE_NUMBER = "13";

/** Call to api with four numbers to return random fact on each number */
async function fourNumFacts() {

  const response = await axios({
    url: `${BASE_URL}${RANDOM_NUMBERS}/trivia?json`
  });

  for (let num in response.data) {
    $("#random-facts").append($(`<li>${response.data[num]}</li>`));
  }
}

/** Four calls to API and using Promise.all to collect response and status for
 * each call*/
async function favNumFacts() {

  let fact1 = axios(`${BASE_URL}${FAVORITE_NUMBER}/trivia?json`);
  let fact2 = axios(`${BASE_URL}${FAVORITE_NUMBER}/trivia?json`);
  let fact3 = axios(`${BASE_URL}${FAVORITE_NUMBER}/trivia?json`);
  let fact4 = axios(`${BASE_URL}${FAVORITE_NUMBER}/trivia?json`);

  let results = await Promise.allSettled([fact1, fact2, fact3, fact4]);

  for (let result of results) {
    // conditional to make sure each succeeded - check status
    $("#favorite-num-facts").append($(`<li>${result.value.data.text}</li>`));
  }
}

fourNumFacts();
favNumFacts();