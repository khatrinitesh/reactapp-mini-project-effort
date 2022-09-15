import React,{useState} from 'react';
import Banner from '../components/banner';
import CustomToDo from '../components/todo/todo';
import FullScreen from '../components/slideshow';

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

    const btnToggle = () => {
        setIsActive(!isActive)
    }
  return (
    <div className='content'>
    <Banner bannerTitle={"About"} bannerDesc={"Ad aute aliqua aliqua velit dolor."}/>
    <CustomToDo/>
    {count}
    <button onClick={btnInc}>+</button>
    <button onClick={btnDec}>-</button>
    <button onClick={btnReset}>Reset</button>


    <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-success'}>{isActive ? 'info' : 'success'}</button>
    {isActive ? 'nitesh' : 'sameet'}

    <FullScreen/>
    </div>
  )
}
