import React from "react";
import axios from "axios";
import {useEffect, useState} from  "react";


export default function Poket (props) {

    const [pokemon, setPokemon] = useState ([])

    
    const catchThemAll = () => {
      const Url = `https://pokeapi.co/api/v2/pokemon/12/` 
      axios
      .get(Url)
      .then((response) => setPokemon(response.data))
      .catch((err) => console.log("Erro"))
    }

    useEffect (() => {
        catchThemAll(props.pokemon)
    }, [props.pokemon])

   
    return (
        <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    )
}