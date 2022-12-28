import React, { useContext } from 'react';
import MainContext from './maincontext';

export default function Home() {

    const context = useContext(MainContext);
    console.log(context);
  return (
    <div>
        <p style={context.Heading}>
            Home <span style={{color:'blue'}}>{context.data}</span>
        </p>
    </div>
  )
}
