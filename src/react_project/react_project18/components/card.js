import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({data}) {

  return (
    <div>
        {data.map((card,index) => {
            return(
                <div key={index} className='card'>
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                    <Link to="/cards/${card.title}">View More</Link>
                </div>
            )
        })}
    </div>
  )
}
