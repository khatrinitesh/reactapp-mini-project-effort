import React from 'react';
import {Bg,Alert} from './jquery';


export default function CustomApp() {
  return (
    <div>
        <p>Hello React App</p>
        <button onClick={Alert}>Click alert</button>
    </div>
  )
}
