import React,{useState} from 'react';
import Banner from '../components/banner';

export default function Home() {

  const [count,setCount] = useState(0)
  const [isActive,setIsActive] = useState(false)

  const btnToggle = () => {
    setIsActive(!isActive)
  }

  const btnInc = () => {
    setCount(c => c + 1)
  }
  const btnDec = () => {
    setCount(c => c - 1)
  }
  const btnRes = () => {
    setCount(0)
  }
  return (
    <div className='content'>
        <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnRes}>Reset</button>

        <button className={isActive ? 'btn btn-primary' : 'btn btn-secondary'} onClick={btnToggle}>{isActive ? 'hide' : 'show'}</button>
        {isActive ? "nitesh" : null}
    </div>
  )
}
