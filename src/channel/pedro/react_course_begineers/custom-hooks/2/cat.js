import React from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {UseGetCat} from './usegetcat';

export const Cat = () => {
    const {data,isCatLoading,refetchData} = UseGetCat();

    if(isCatLoading){
        return <h2>Loading...</h2>
    }

    return(
        <>
        <button onClick={refetchData}>Click refetch</button>
         <h1>{data?.fact}</h1>
        </>
    )
}
