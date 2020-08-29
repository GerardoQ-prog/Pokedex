import React from 'react';

const PokeItem = ({imgs}) => {
    console.log(imgs);
    return (  
        <>

        
        <h1>{imgs.name}</h1>
        <p>{imgs.mensaje}</p>
        <div className="pokedex__pantalla">
            <img src={imgs.url} alt={imgs.name} className="pokedex__foto"></img>
        </div>
        </>
    );
}
 
export default PokeItem;