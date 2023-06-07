import React from "react";
import "./result.css";
import { POKEMON_QUERY, MOVES_QUERY } from "./../../graphql/get-pokemon";
import { useQuery } from "@apollo/client";

/**
 * Res
 * @param {string} text
 * @returns div representing a Result Box in the lost of box
 */
function Res({ text = "poke" }) {
	return <div className="res">{text}</div>;
}

function Result({globalState, setGlobalState}) {

	// get URL and parameters;
	const urlParams = new URLSearchParams(window.location.search);
	
	let querySelected, variables = {};
	
	const filter = urlParams.get("filter");

	if(filter === 'pokemons') {
		querySelected = POKEMON_QUERY;
		
		const generation = urlParams.get("generation") || "";
		const pokemonColor = urlParams.get("pokemonColor") || "";
		const pokemonHabitatNames = urlParams.getAll("pokemonHabitatNames") || [];

		variables = {
			generation,
			pokemonColor,
			pokemonHabitatNames
		};
		
	} else if (filter === 'moves') {
		querySelected = MOVES_QUERY;
		
		const powerPoints = parseInt(urlParams.get("powerPoints"));
		const moveClass = urlParams.get("moveClass");

		variables = {
			powerPoints,
			moveClass
		};
	}
		
	console.log(variables);

	const { data: { pokemons = [] } = {}, loading, error} = useQuery(querySelected, {variables});
	
	if (loading) return "Loading...";
	if (error) return <pre>{error.message}</pre>;
	
	console.log(pokemons);
	
	return (
		<div className="result">
			<pre>Applied filter: {filter}</pre>
			<h1>Found {pokemons.length} Pokemons</h1>
			<div className="result-list">
				{pokemons.map((pokemon, idx) => (
					<Res key={idx} text={pokemon.name} />
				))}
			</div>
		</div>
	);
}

export default Result;
