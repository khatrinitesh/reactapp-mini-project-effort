import React,{useState } from 'react';
import Banner from '../components/banner';

export default function Home() {

    const name = <h1>nitesh khatri</h1>
    const age = <h1>33</h1>
    const dob = <p>17th June 1989</p>
    const email = <p>nitesh.khatri88@gmail.com</p>
    const user = (
        <div>
            {name}
            {age}
            {dob}
            {email}
        </div>
    )

    const [count,setCount] = useState(0)
    const [isActive,setIsActive] = useState(false)

    const btnToggle = () => {
        setIsActive(!isActive)
    }
    const btnInc = () => {
        setCount(prevCount => prevCount + 1)
    }
    const btnDec = () => {
        setCount(prevCount => prevCount - 1)
    }
    const btnRes = () => {
        setCount(0)
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Home"} bannerDesc={"Esse aliquip laborum nisi aute."}/>
        {user}
        {user}
        {user}
        {user}
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnRes}>Reset</button>

        <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-success'}>{isActive ? 'true' : 'false'}</button>
        {isActive ? 'true' : 'false'}
        <User/>

        <User name="nitesh" age="33" email="nitesh.khatri88@gmail.com"/>
        <User name="sameet" age="40" email="sameet210000@gmail.com"/>
        <User name="urvashi" age="64" email="urvashi.khatri58@gmail.com"/>

    </div>
  )
}


const User = (props) => {
    return(
        <>
         <h1>{props.name}</h1>
         <h1>{props.age}</h1>
         <p>{props.email}</p>
        </>
    )
}