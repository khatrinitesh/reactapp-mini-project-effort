import React from 'react';
// let image1 = require('./constants/img/350x150.png');
import CustomData from './constants/data';

import images from './constants/images';



export default function CustomApp() {

    const [data,setData] = React.useState(CustomData)

    const delBtn = (id) => {
        const finalData = data.filter((item) => item.id != id)
        setData(finalData)
        
    }
  return (
    <div>
        React modern app
        {['nitesh','sameet','mom','daddy'].map((project) => {
            return(
                <div>{project}</div>
            )
        })}
        <br/>
        <img src={images.image1}/>
        <br/>
        <img src={images.image2}/>
        <br/>
        <img src={images.image3}/>
        {data.map((item) => {
            return(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <button onClick={() => delBtn(item.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
