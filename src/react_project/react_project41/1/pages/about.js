import React,{useState} from 'react';
import Banner from '../components/banner';

export default function About() {

    const [count,setCount] = useState(0);
    const [toggle,setToggle] = useState(false);

    const btnToggle=  () => {
        setToggle(!toggle);
    }

    const btnInc = () => {
        setCount(prevC => prevC + 1)
    }
    const btnDec = () => {
        setCount(prevC => prevC - 1)
    }
    const btnReset = () => {
        setCount(0)
    }
   return (
    <div className='content'>
    <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
    {count}
    <button onClick={btnInc}>+</button>
    <button onClick={btnDec}>-</button>
    <button onClick={btnReset}>Reset</button>

    <button  onClick={btnToggle} className={toggle ? 'btn btn-primary' : 'btn btn-secondary'}>{toggle ? 'primary' : 'secondary'}</button>
    </div>
  )
}
