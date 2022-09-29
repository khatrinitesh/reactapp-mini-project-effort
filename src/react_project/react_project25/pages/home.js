import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import CustomTodo from '../components/todo/todo';


export default function Home() {
    const [count,setCount] = useState(0)
    const [isActive,setIsActive] = useState(false)
    const [data,setData] = useState([])

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

    useEffect(() => {
        fetch('http://localhost:3001/data').then(res => res.json().then(res => {setData(res)}))
    })
  return (
    <div className='content'>
        <Banner bannerTitle={"Home"} bannerDesc={"Lorem Ipsum line paragraph"}/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>      

        <button className={isActive ? 'btn btn-primary' : 'btn btn-success'} onClick={btnToggle}>{isActive ? 'nitesh' : 'sameet'}</button> 
        {isActive ? 'nitesh' : 'sameet'}
        <CustomTodo/>
        <div className='chat-box card' >
            <div className='card-header'>EVA</div>
            <div className='card-body'>
                {
                    data && data.map((item) => <div>{item}</div>)
                }
            </div>
            <div className='card-footer'>
                <div className='row'>
                    <div className='col-8'>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-primary'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

