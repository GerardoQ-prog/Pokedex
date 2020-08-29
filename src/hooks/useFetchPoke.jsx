import {useState,useEffect} from 'react';
import getPoke from '../helpers/getPoke';

const useFetchPoke = (poke) => {
    
    const [state, setstate] = useState({
        data:{},
        loading:true
    })

     useEffect( () =>{

        getPoke(poke)
        .then( pokedex =>{

            setTimeout(() =>{
                setstate(
                    {
                        data:pokedex,
                        loading:false
                    }
                )
            }
               
            ,3000)
                
        })
        .catch(function(e){
            console.log(e);
            
            setstate(
                {
                    data:{
                        mensaje:'No existe Pokemon'
                    },
                    
                    loading:false
                }
            )
        })

     },[poke])

    return state
}
 
export default useFetchPoke;