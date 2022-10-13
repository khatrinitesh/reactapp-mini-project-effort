import React,{useState} from 'react';
import Banner from '../components/banner';

export default function Home() {

    const [count,setCount] = useState(0)
    const [isActive,setIsActive] = useState(false)

    const btnInc =() => {
        setCount(prevC => prevC + 1)
    }
    const btnDec =() => {
        setCount(prevC => prevC - 1)
    }
    const btnReset =() => {
        setCount(0)
    }

    const btnToggle= () => {
        setIsActive(!isActive)
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Home"} bannerDesc={"Officia voluptate laborum sit id est eiusmod veniam duis."}/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>

        <button className={isActive ? 'btn btn-primary' : 'btn btn-success'} onClick={btnToggle}>{isActive ? 'nitesh' : 'sameet'}</button>
        {isActive ? 'nitesh' : 'sameet'}
    </div>
  )
}
