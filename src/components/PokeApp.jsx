import React, { useState } from 'react'
import AddPokemon from './AddPokemon';
import PokeSearch from './PokeSearch';

const PokeApp = () => {

    const [pokemon, setPokemon] = useState([
        'charizard'
    ]);
    
    return (
        <>
        <div className="pokedex">
            <h2>Pokedex GerardoQ</h2>
            <AddPokemon pokemon={pokemon} setPokemon={setPokemon}></AddPokemon>
            {
                pokemon.map( poke =>{
                return <PokeSearch poke={poke} key={poke}></PokeSearch>
                })
                
            }
        </div>
        </>
    )
}
export default PokeApp
