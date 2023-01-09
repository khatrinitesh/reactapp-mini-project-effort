import React from 'react';
import Home from './home';
import {recordOne} from './recordone';
import {recordTwo} from './recordtwo';

export default function CustomApp() {

    const name = 'dev';
    const styleObject = {
        fontSize:14,
        color:'orange',
        textAlign:'center',
        paddingTop:'100px'
    }

    const handleClick = () => {
        alert('hello nitesh')
    }
  return (
    <div>
        <Home style={styleObject} value={name} submitBox={handleClick} details={recordOne} recordTwo={recordTwo}/>
    </div>
  )
}
