import React, { useState } from 'react';
import PropTypes from 'prop-types'
const AddPokemon = ({pokemon,setPokemon}) => {
    
    const [input, setInput] = useState('')
    
    const change = (e)=>{
        
        setInput(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault()
        
        setPokemon([input])
        setInput('')
    }
    
    return (  
        

        
        <form onSubmit={submit}>
            <input 
            type="text"
            value={input}
            className="pokedex__input"
            onChange={change}
            
            ></input>
        </form>
    );
}
 
export default AddPokemon;
AddPokemon.propTypes ={
    setPokemon:PropTypes.func.isRequired
}
