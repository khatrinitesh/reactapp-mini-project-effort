import React from 'react';
import Wrap from './wrap';

export default function CustomApp() {

    const Heading = {
        color:'red',
        fontSize:'100px',
        textAlign:'center'
    }
  return (
    <div>
        <Wrap label="Box" style={Heading}/>
    </div>
  )
}
