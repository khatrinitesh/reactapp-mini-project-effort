import React, { useState } from 'react'

const num = 5 + 6
const wallpaper = 'elephant'


export default function CustomApp() {
  return (
    <div>
        <Child name={function (){
            return (
                <>
                 <h1 style={{color:'red'}}>'my name is nitesh'</h1>
                {num}   
                <br/>
                {wallpaper}
                <br/>
                {Math.floor(Math.random() * 10,2)}

                
                <br/>
            
                </>
            )
        }}/>
    </div>
  )
}

function Child(props){
    return(
        <div>
            {props.name()}
        </div>
    )
}

function FlipState(props){
    const [on,setOn] = useState(false);

    const flip = () => {
        setOn(!on)
    }
    return(
        <>
         {props.render(on,flip)}
        </>
    )
}
