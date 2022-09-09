import React,{useState} from 'react';
import Banner from '../components/banner';
import CustomToDo from '../components/todolist/todo';

export default function About() {

    const [count,setCount] = useState(0);
    const [isActive,setIsActive] = useState(false)

    const btnInc = () => {
        setCount(prevc => prevc + 1)
    }
    const btnDec = () => {
        setCount(prevc => prevc - 1)
    }
    const btnReset = () => {
        setCount(0)
    }

    const btnToggle = () => {
        setIsActive(!isActive)
    }

    const handleClick =(e,message) => {
        console.log(e.currentTarget)
        console.log(message);
        console.log('div clicked')
    }
    function hide(e) {
        e.currentTarget.style.visibility = 'hidden';
        console.log(e.currentTarget);
        // When this function is used as an event handler: this === e.currentTarget
      }
  return (
    <div className='content'>
        <Banner bannerTitle={"About page"} bannerDesc={"Lorem Ipsum"}/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>

        <div>
            <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-success'}>
                {isActive ? 'nitesh' : 'sameet'} 
            </button>
        </div>
        <CustomToDo/>

        <button className='btn btn-primary' onClick={e => handleClick(e,'hello')}>hello world</button>
        <button onClick={hide}>hide</button>
    </div>
  )
}
