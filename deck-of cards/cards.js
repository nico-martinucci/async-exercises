'use strict'

const BASE_URL = 'https://deckofcardsapi.com/api';



async function drawSingleCard() {

  const response = await axios({
    url: `${BASE_URL}/deck/new/draw/?count=1`
  });

  let suit = response.data.cards[0].suit
  let value = response.data.cards[0].value

  console.log(`${value} of ${suit}`);
}

async function drawTwoCards() {

  const response = await axios({
    url: `${BASE_URL}/deck/new/draw/?count=1`
  });

  let suitCard1 = response.data.cards[0].suit
  let valueCard1 = response.data.cards[0].value

  const deckId = response.data.deck_id;

  const response2 = await axios({
    url: `${BASE_URL}/deck/${deckId}/draw/?count=1`
  });

  let suitCard2 = response2.data.cards[0].suit
  let valueCard2 = response2.data.cards[0].value

  console.log(`${valueCard1} of ${suitCard1} and ${valueCard2} of ${suitCard2}`)

}

