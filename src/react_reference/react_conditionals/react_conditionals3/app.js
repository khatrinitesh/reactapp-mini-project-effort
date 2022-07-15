import React from 'react'

export default function app() {
  return (
    <div>
        <Example toDisplay={true}/>
        <Example toDisplay={false}/>
    </div>
  )
}

function Example(props){
    if(!props.toDisplay)
    return null;
    else return <h1>Component is rendered</h1>
}

// function Example(){
//     const counter = 5 

//     return (
//         <div>
//             {
//                 (counter==5) && <h1>hello world!</h1>
//             }
//         </div>
//     )
// }