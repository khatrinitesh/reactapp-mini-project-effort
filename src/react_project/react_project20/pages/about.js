import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function About() {

    const [count,setCount] = useState(0)
    const [isActive,setIsActive] = useState(false);

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
        <Banner bannerTitle={"About"} bannerDesc={"Fugiat labore est labore ullamco dolore sit non.Esse occaecat consectetur adipisicing excepteur commodo non voluptate veniam Lorem adipisicing anim do et eiusmod."}/>
        {count}
        <button  className="btn btn-primary" onClick={btnInc}>+</button>
        <button  className="btn btn-primary" onClick={btnDec}>-</button>
        <button  className="btn btn-primary" onClick={btnReset}>Reset</button>

        <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-secondary'}>Click toggle</button>
        {isActive ? 'nitesh' : 'sameet'}
    </div>
  )
}
