import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import CustomToDo from '../components/todo/todo'

export default function About() {

    const [count,setCount] = useState(0);
    const [isActive,setIsActive] = useState(false)

    const btnInc = () => {
        setCount(prevC => prevC + 1)
    }
    const btnDec = () => {
        setCount(prevC => prevC - 1)
    }
    const btnReset = () => {
        setCount(0)
    }

    const btnToggle = () => {
        setIsActive(!isActive)
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"About page"} bannerDesc={"Sunt fugiat occaecat dolor minim irure aliquip adipisicing occaecat eiusmod aliqua nulla eiusmod."}/>
        <CustomToDo/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>

        <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-success'}>{isActive ? 'Nitesh' : 'Sameet'}</button>
        {isActive ? "nitesh" : "sameet"}
    </div>
  )
}
