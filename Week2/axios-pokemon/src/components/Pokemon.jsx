import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = ()=>{

    let [pokemonList, setPokemonList] = useState([])

    const getPokemons = ()=>{
        console.log("Getting the pokemons")

        axios.get ("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")

        .then( convertedResponse=>{
            console.log("got the response--->", convertedResponse)
            setPokemonList(convertedResponse.data.results)
        })

        .catch(err=>{
            console.log("Ayooo, sum' aint right ma man...",err)
        })
    }

    return (
        <div>
            <button onClick={getPokemons}>Click me to get all the Pokemons.</button>
            {
                pokemonList.map((pokemon, idx)=>{
                    return (
                        <div key={idx}>
                            <h3>{pokemon.name}</h3>
                            <p>{pokemon.height}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}




export default Pokemon;