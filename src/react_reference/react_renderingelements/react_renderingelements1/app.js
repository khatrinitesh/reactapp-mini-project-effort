import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <ShowTime/>
    </div>
  )
}

function ShowTime(){
    const myElement = (
        <div>
            <h1>Welcome to geeks for weeks</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    )
    return(
        <>
        {myElement}
        </>
    )
}