import React,{useState} from 'react';

export default function HeroList({allHeroes}) {

  return ( 
    <div>
        <h1>Heroes list</h1>
        {allHeroes && allHeroes.length ? (<ol>
            {allHeroes.map((hero,index) => {
                <li key={index}>{hero}</li>
            })}
        </ol>) : (<h6>No heroes found</h6>)}
    </div>
  )
}
