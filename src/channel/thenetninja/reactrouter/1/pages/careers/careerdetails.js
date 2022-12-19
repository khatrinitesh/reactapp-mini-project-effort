import { useLoaderData, useParams } from 'react-router-dom'
import React from 'react';

export default function CareerDetails(){
    const {id} = useParams();
    const career = useLoaderData();

    return(
        <div className='career-details'>
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className='details'>
                <p>Nisi ipsum mollit cillum do enim ullamco in nostrud anim fugiat laborum laboris consequat. Adipisicing nulla laborum veniam proident id ullamco duis culpa voluptate elit. Mollit excepteur amet Lorem esse occaecat nostrud culpa dolore dolore. Deserunt dolore ex irure commodo labore incididunt.</p>
            </div>
        </div>
    )
}

export const careerDetailsLoader = async({params}) => {
    const {id} = params;
    const res = await fetch('http://localhost:4000/careers/' + id)
    if(!res.ok){
        throw Error('could not find that career.')
    }
    return res.json();
}