import React from 'react';
import useFetchPoke from '../hooks/useFetchPoke';
import PokeItem from './PokeItem';

import PokeLoading from './PokeLoading';
const PokeSearch = ({poke}) => {

    const {data:imgs,loading}=useFetchPoke(poke)
    // console.log(imgs);
    return (

        <>
            {
                loading?<PokeLoading/>:<PokeItem imgs={imgs}></PokeItem>
            }
            
        </>
      );
}
 
export default PokeSearch;