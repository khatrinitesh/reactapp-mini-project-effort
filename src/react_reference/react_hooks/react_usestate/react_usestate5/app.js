import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
        <Example/>
    </div>
  )
}


function Example(){

    const [over,setOver] = useState(false)

    let buttonStyle = {
        backgroundColor:''
    }

    if(over){
        buttonStyle.backgroundColor = 'green'
    }
    else{
        buttonStyle.backgroundColor = ''
    }
    return(
        <>
         <button style={buttonStyle} onMouseOut={() => setOver(false)} onMouseOver={() => setOver(true)}>Hover over me!</button>
        </>
    )
}