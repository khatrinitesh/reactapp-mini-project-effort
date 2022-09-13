import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';


export default function FullCard({data}) {
  const customnav = useNavigate();

  const btnBack = () => {
    customnav('/')
  }

  const {title } = useParams();
  return (
    <section className='fullcard'>
      {data.filter((card) => card.title === title).map((card,index) => {
        return(
          <div key={index}>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <button onClick={btnBack}>back</button>
          </div>
        )
      })}
    </section>
  )
}
