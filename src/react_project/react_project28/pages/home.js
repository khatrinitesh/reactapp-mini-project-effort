import React,{useState} from 'react';
import Banner from '../components/banner';
import ParentOne from '../components/parent_child_components/parent1';

export default function Home() {
    const [count,setCount] = useState(0)
    const [isActive, setIsActive]  = useState(false)

    const btnInc = () => {
        setCount(prevC => prevC + 1)
    }
    const btnDec = () => {
        setCount(prevC => prevC - 1)
    }
    const btnRes = () => {
        setCount(0)
    }
    const btnToggle = () => {
        setIsActive(!isActive)
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Home"} bannerDesc={"Do mollit amet laboris esse amet est sit nulla nostrud sunt aute anim."}/>
        <ParentOne/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnRes}>Reset</button>
        <button onClick={btnToggle} className={isActive ? ' btn btn-primary' : 'btn btn-success'}>{isActive ? 'true' : 'false'}</button>
        {isActive ? 'nitesh' : 'sameet'}
    </div>
  )
}
