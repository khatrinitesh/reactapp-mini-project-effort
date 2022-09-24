import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';


export default function Home() {

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
        <Banner bannerTitle={"Home"} bannerDesc={"Reprehenderit adipisicing pariatur culpa adipisicing ex dolore incididunt duis esse reprehenderit qui."}/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>

        <button onClick={btnToggle}>Click Toggle</button>
        {isActive ? 'nitesh' : 'sameet'}

    </div>
  )
}
