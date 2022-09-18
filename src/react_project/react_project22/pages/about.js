import React,{useState} from 'react';
import Banner from '../components/banner';
import CustomToDo from '../components/todo/todo';

export default function About() {

    const [count,setCount] = useState(0)
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

    const btnToggle =()=>{
        setIsActive(!isActive)
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"About"} bannerDesc={"Quis dolor anim consectetur cupidatat voluptate eiusmod nostrud commodo minim anim."}/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>

        <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-success'}>{isActive ? 'nitesh' : 'sameet'}</button>
        {isActive ? 'nitesh' : 'sameet'}
        <CustomToDo/>
    </div>
  )
}
