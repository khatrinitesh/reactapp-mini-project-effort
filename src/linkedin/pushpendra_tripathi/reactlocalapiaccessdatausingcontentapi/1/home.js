import React,{useContext} from 'react';
import MainContext from './maincontext';

export default function Home() {

    const x = useContext(MainContext)
    console.log(x);

  return (
    <div>
        <h1>Home Page</h1>
        {x.map((prop) => {
            return(
                <>
                 <h1>{prop.name}</h1>
                 <h2>{prop.age}</h2>
                 <h3>{prop.address}</h3>
                </>
            )
        })}
    </div>
  )
}
