import React,{useState} from 'react';
import Banner from '../components/banner';

export default function About() {
    const element = ['alert alert-danger']

    const [count,setCount] = useState(0)
    const [isActive,setIsActive] = useState(false)

    const btnInc = () => {
        setCount(c => c + 1)
    }
    const btnDec = () => {
        setCount(c => c - 1)
    }
    const btnRes = () => {
        setCount(0)
    }

    const btnToggle  =() => {
        setIsActive(!isActive)
    }
  return (
    <div className='content'>
        <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
        <div className={element}>Alert</div>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnRes}>Reset</button>


        <button className={isActive ? 'btn btn-primary' : 'btn btn-success'} onClick={btnToggle}>{isActive ? 'hide' : 'show'}</button>
        {isActive ? <Nitesh/> : null}
    </div>
  )
}


const Nitesh = () => {
    return(
        <div>
            nitesh khatri
        </div>
    )
}
const Sameet = () => {
    return(
        <div>
            Sameet khatri
        </div>
    )
}