import React from 'react'

export default function ConditionalRendering() {
  return (
    <>
        <section>
            <h1>Section List</h1>
            <ul>
                <ItemSix/>
            </ul>
        </section>
    </>
  )
}


function Item({name,isPacked}) {
    if(isPacked){
        return(
            <li className='item'>{name} ✔</li>
        )
    }
    return <li className='item'>{name}</li>
}
function ItemTwo({name,isPacked}) {
    if(isPacked){
        return null
    }
    return <li className='item'>{name}</li>
}
function ItemThree({name,isPacked}){
    return <li> {isPacked ? name  + '✔' : name}</li>
}
function ItemFour({name,isPacked}){
    return(
        <li className='item'>
            {isPacked ? (
                <del>{name + '✔'}</del>
            )
        : (
            name
        )}
        </li>
    )
}
function ItemFive({name,isPacked}){
    return(
        <li className='item'>
            {name} {isPacked && '✔'}
        </li>
    )
}
function ItemSix(){

    const userType = 1;

    if(userType === 1){
        return <h1>You are a Admin</h1>
    }
    else if(userType >= 2){
        return <h1>you are a manager</h1>
    }

}