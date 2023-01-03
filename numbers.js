const BASE_URL = "http://numbersapi.com/";

/** Call to api with four numbers to return random fact on each number */
async function fourNumFacts(evt) {

  const response = await axios({
    url: `${BASE_URL}1..3,8/trivia?json`
  })
  console.log(response);
}

/** Four calls to API and using Promise.all to collect response and status for
 * each call*/
async function favNumFacts(evt) {

  let fact1 = axios(`${BASE_URL}13/trivia?json`)
  let fact2 = axios(`${BASE_URL}13/trivia?json`)
  let fact3 = axios(`${BASE_URL}13/trivia?json`)
  let fact4 = axios(`${BASE_URL}13/trivia?json`)

  let results = await Promise.allSettled([fact1, fact2, fact3, fact4])

  console.log(results);

}