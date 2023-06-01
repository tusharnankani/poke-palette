import React from "react";
import { useQuery, gql } from "@apollo/client";

export const POKEMON_QUERY = gql`
query PokemonQuery {
    pokemons: pokemon_v2_pokemonspecies(
        where: {
          pokemon_v2_generation: { name: { _eq: "generation-iii" } }
          pokemon_v2_pokemoncolor: { name: { _eq: "green" } }
          pokemon_v2_pokemonhabitat: {
            pokemon_v2_pokemonhabitatnames: { name: { _in: ["grassland", "mountain", "water's edge"] } }
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

export const MOVES_QUERY = gql`
query MovesQuery {
    pokemon_v2_move(where: { pp: { _gt: 20 }, pokemon_v2_movedamageclass: { name: { _eq: "physical" } } }) {
      name
      damage_class: pokemon_v2_movedamageclass {
        name
      }
      pp
      priority
    }
  }
`