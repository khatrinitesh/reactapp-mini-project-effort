import React from 'react'

export default function Home(props) {

    console.log(props.recordTwo)
  return (
    <>
    {props.recordTwo.map((allme) => {
        return <><h1>{allme.name}</h1></>
    })
    }
    <h1 style={props.style}>nitesh khatri</h1>
    <button onClick={props.submitBox}>Submit Box</button>
    {
        props.details.map((user) => {
            return (
                <>
                 <h1>{user.name}</h1>
                 <h1>{user.age}</h1>
                </>
            )
        })
    }
    </>
  )
}
