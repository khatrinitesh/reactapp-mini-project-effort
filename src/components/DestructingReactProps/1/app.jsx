import React from 'react'

export default function CustomApp() {
  return (
    <>
      <RecruitCard/>
      <hr/>
      <Parent/>
    </>
  )
}

const Parent = () => {
    const data = 'hello'
    return <Child message={data}/>
}
const Child = ({message}) => {
    return <p>{message}</p>
}

const Recruit = {name: "Kevin", profession: "operator", age: 28}
const {name,profession,age} = Recruit;
const RecruitCard = () => {
    return console.log(`${name} is ${age} works as ${profession}`)
}
RecruitCard()