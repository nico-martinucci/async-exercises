'use strict'

const BASE_URL = 'https://deckofcardsapi.com/api';
const $getCardButton = $("#get-card");
const $cardsDiv = $("#cards");

let deckId;

async function drawSingleCard() {

	const response = await axios({
		url: `${BASE_URL}/deck/${deckId}/draw/?count=1`
	});

	const cardImgUrl = response.data.cards[0].images.png;
	$cardsDiv.append($(`<img width="80px" src="${cardImgUrl}"></img>`))
}

$getCardButton.on("click", drawSingleCard)

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

async function getNewDeck() {
	const response = await axios({
		url: `${BASE_URL}/deck/new/shuffle/?deck_count=1`
	});

	deckId = response.data.deck_id;
}

getNewDeck();