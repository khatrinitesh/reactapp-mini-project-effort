import React from 'react';
import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {

    const careers = useLoaderData();
  return (
    <div className='careers'>
        {careers.map(career => (
            <Link to="/" key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>
        ))}
    </div>
  )
}


// data loader 
export const careersLoader = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if(!res.ok){
        throw Error('could not fetch the list of careers');
    }
    return res.json();
}