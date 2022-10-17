import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const UseGetCat = () => {
    

    const {data,refetch,isLoading:isCatLoading,error} = useQuery(['cat'],async() => {
        return axios.get('https://catfact.ninja/fact').then((res) => res.data)
    })

    const refetchData = () => {
        alert('DATA REFETCHED')
        refetch();
    }

    return {data,refetchData,isCatLoading,error}
}