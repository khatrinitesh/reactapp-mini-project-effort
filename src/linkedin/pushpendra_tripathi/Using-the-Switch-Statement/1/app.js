import React from 'react'

export default function CustomApp() {

   const userType = 'vishal' 
    switch(userType){
        case "Nitesh" : return <h1>You are a nitesh.</h1>
        case "Sameet" : return <h1>You are a sameet.</h1>
        case "Arvind" : return <h1>You are a arvind.</h1>
        case "Urvashi" : return <h1>You are a urvashi.</h1>
        case "Manisha" : return <h1>You are a manisha.</h1>
        default: return <h1>No Result</h1>
    }
}
