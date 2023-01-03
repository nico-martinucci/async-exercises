"use strict";

// get all pokemon
// pick 3 random pokemon
// make requests for each pokemon; store it
// make add'l requests to the species url
// log flavor text

const BASE_POKEMON_API_URL = "https://pokeapi.co/api/v2";

async function getPokemonAndData() {
    const allPokemon = await getAllPokemon();
    console.log(allPokemon);
    const randomPokemon = _.sampleSize(allPokemon, 3);

    const pokemonData = await Promise.allSettled(
        randomPokemon.map(p => getIndividualPokemonData(p))
    );

    console.log(pokemonData);
}

async function getAllPokemon() {
    const response = await axios({url: `${BASE_POKEMON_API_URL}/pokemon`});
    return response.data.results;
}

async function getIndividualPokemonData(pokemon) {
    const response = await axios({url: pokemon.url});
    return response.data;
}

getPokemonAndData();