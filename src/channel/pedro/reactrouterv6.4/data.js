import React from 'react';
import { useLoaderData,useNavigation } from 'react-router-dom';

export const Data = () =>  {


    const dogUrl = useLoaderData();
    const navigation = useNavigation();

    if(navigation.state === 'loading'){
        return <h1>Loading...</h1>
    }

  return (
    <div>
        {" "}
        <img src={dogUrl}/>
    </div>
  )
}

export const dataLoader = async () => {
    const res = await fetch('https://random.dog/woof.json');
    const dog = await res.json();
    return dog.url;
}