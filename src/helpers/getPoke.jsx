
// import React, {useEffect} from 'react';
const getPoke = async(poke) => {
    
    const url= `https://pokeapi.co/api/v2/pokemon/${poke}`
    const resp =  await fetch(url)
    const data=  await resp.json()
    console.log(data);
        const pokedex = 
        {
           id:data.name,
            name:data.name,
            url:data.sprites.other.dream_world.front_default 
        }
        
        // console.log(pokedex);
        
    return pokedex
  
    
}
 
export default getPoke;