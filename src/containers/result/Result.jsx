import React from 'react';
import './result.css'
import { POKEMON_QUERY, MOVES_QUERY } from "./../../graphql/get-pokemon";
import { useQuery } from "@apollo/client";

/**
 * Res
 * @param {string} text
 * @returns div representing a Result Box in the lost of box
 */
function Res({text="poke"}) {
    return ( 
        <div className="res">
            {text}
        </div>
     );
}

function Result() {

    // get URL and parameters;
    const urlParams = new URLSearchParams(window.location.search);
    const generation = urlParams.get('generation');
    const pokemonColor = urlParams.get('pokemonColor');
    const pokemonHabitatNames = urlParams.getAll('pokemonHabitatNames');

    // populate variables according to ./graphql queries
    const variables = {
        generation,
        pokemonColor,
        pokemonHabitatNames,
    }

    const { data: { pokemons = [] } = {}, loading, error} = useQuery(POKEMON_QUERY, {variables});
    // const { data: { pokemons = [] } = {}, loading, error} = useQuery(MOVES_QUERY);
    console.log(pokemons)

    if (loading) return "Loading...";
    if (error) return (<pre>{error.message}</pre>);
    
    return ( 
        <div className="result">
            <h1>Found {pokemons.length} Pokemons</h1>
            <div className="result-list">
                {pokemons.map((pokemon, idx) => (<Res key={idx} text={pokemon.name}/>))}
            </div>
        </div>
     );
}

export default Result;