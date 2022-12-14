import React,{useContext} from 'react';
import MainContext from './maincontext';

export default function About() {

    const x = useContext(MainContext);
    console.log('About',x);
  return (
    <div>
        <h1 style={{color:'red'}}>
            About Page
        </h1>
        {x.map((pro) => {
            return(
                <>
                 <h1 style={{color:'orange'}}>
                    Name - {pro.name}

                 </h1>
                 <h2>Age - {pro.age}</h2>
                <h3>Address - {pro.address}</h3>
                </>
            )
        })}
    </div>
  )
}
