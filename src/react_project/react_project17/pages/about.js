import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import WindowSize from '../components/windowsize';

export default function About() {

    const [count,setCount] = useState(0)
    const [isActive,setIsActive] = useState(false)

    const btnInc = () => {
        setCount(prevC => prevC  + 1)
    }
    const btnDec = () => {
        setCount(prevC => prevC  - 1)
    }
    const btnReset = () => {
        setCount(0)
    }

    const btnToggle = () => {
        setIsActive(!isActive)
    }

  return (
    <div className='content'>
        <Banner bannerTitle={"About page"} bannerDesc={"Est commodo veniam laborum consequat cupidatat irure magna reprehenderit aute non velit."}/>
        {count}
        <button className="btn btn-primary" onClick={btnInc}>+</button>
        <button className="btn btn-primary" onClick={btnDec}>-</button>
        <button className="btn btn-primary" onClick={btnReset}>Reset</button>

        <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-success'}>
            {isActive ? 'nitesh' : 'sameet'}
        </button>
        <FinalDimension/>
    </div>
  )
}

function FinalDimension(){
    const {height,width} = WindowSize();

    return(
        <>
         width: {width} ~ height {height}
        </>
    )
}