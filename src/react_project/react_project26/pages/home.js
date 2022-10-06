import React,{useState} from 'react';
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
        <Banner bannerTitle={"Home"} bannerDesc={"Nostrud deserunt Lorem id sint."}/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>

        <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-success'}>{isActive ? 'sameet' : 'nitesh'}</button>
        {isActive ? 'sameet' : 'nitesh'}

        
    </div>
  )
}