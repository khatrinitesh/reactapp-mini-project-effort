import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <Wrap/>
    </div>
  )
}

const Wrap = () => {
    const names = ['nitesh','sameet','vishal','sonal']
    return(
        <>
        {names.map((user) => {
            return(
                <>{user}</>
            )
        })}</>
    )
}