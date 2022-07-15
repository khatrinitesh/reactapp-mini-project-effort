import React from 'react'

export default function CustomApp() {
  return (
    <div>
        {element}
        {element1}
        <ul>
            {Example}
        </ul>
        {ExampleOne}
    </div>
  )
}

let i = 1;
var name = 'nitesh'
var element = <h1>Hello, {name} welcome to geeksforgeeks.</h1>
var element1 = <h1>{(i === 1) ? 'hello world' : 'false!'}</h1>

var numbers = [1,2,3,4,5]
const updatedNums = numbers.map((number) => {
    return (number + 2)
})
console.log(updatedNums)

const Example = numbers.map((num) => {
    return <li>{num}</li>
})

const ExampleOne = numbers.map((num,index) => {
    return <li key={index}>{index} - {num}</li>
})