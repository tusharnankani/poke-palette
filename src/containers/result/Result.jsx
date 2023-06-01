import React from 'react';
import './result.css'
import { POKEMON_QUERY, MOVES_QUERY } from "./../../graphql/get-pokemon";
import { useQuery } from "@apollo/client";
import { Box } from '../../components';

function Res({text="poke"}) {
    return ( 
        <div className="res">
            {text}
        </div>
     );
}

function Result() {
    
    const { data: { pokemons = [] } = {}, loading, error} = useQuery(POKEMON_QUERY);
    // const { data: { pokemons = [] } = {}, loading, error} = useQuery(MOVES_QUERY);
    console.log(pokemons)

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
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