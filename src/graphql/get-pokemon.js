import React from "react";
import { useQuery, gql } from "@apollo/client";



/**
 * POKEMON_QUERY 
 * - Dynamic query for Pokemon filters like:
 *    Generation - String
 *    Color - String
 *    Habitat - [String]
 *
 * Expected variables of the format:
  
  {
    "generation": "generation-i",
    "pokemonColor": "red",
    "pokemonHabitatNames": ["grassland"],
  }

*/

export const POKEMON_QUERY = gql`
query PokemonQuery(
  $generation: String,
  $pokemonColor: String,
  $pokemonHabitatNames: [String!],
) {
    pokemons: pokemon_v2_pokemonspecies(
        where: {
          pokemon_v2_generation: { name: { _eq: $generation } }
          pokemon_v2_pokemoncolor: { name: { _eq: $pokemonColor} }
          pokemon_v2_pokemonhabitat: {
            pokemon_v2_pokemonhabitatnames: { name: { _in: $pokemonHabitatNames } }
          }
        }
        order_by: { id: asc }
      ) {
        name
        id
        base_happiness
      }
  }
`


/**
 * MOVES_QUERY 
 * - Dynamic query for Moves filters like:
 *    Power Points - Int
 *    Move Class - String
 *
 * Expected variables of the format:
  
  {
    "powerPoints": 20,
    "moveClass": "physical",
  }

*/

export const MOVES_QUERY = gql`
query MovesQuery(
  $powerPoints: Int,
  $moveClass: String,
) {
    pokemon_v2_move(
      where: { 
        pp: { _gt: $powerPoints }, 
        pokemon_v2_movedamageclass: { name: { _eq: $moveClass } } 
      }
    ) {
      name
      damage_class: pokemon_v2_movedamageclass {
        name
      }
      pp
      priority
    }
  }
`