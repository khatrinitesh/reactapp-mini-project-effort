import React from 'react'

export default function ChildrenProps() {
  return (
    <>
        <ConstOne>Children props 1</ConstOne>
        <ConstTwo title="sadsadadd">Children props 2</ConstTwo>
    </>
  )
}


const ConstOne = (props) => {
    return(
        <>
         {props.children}
        </>
    )
}
const ConstTwo = (props) => {
    return(
        <>
         {props.children} - {props.title}
        </>
    )
}