import React,{useState} from 'react';
import './custom.scss';

export default function CustomApp() {

    const [position,setPosition] = useState([20,10])
    const [message,setMessage] = useState('keep trying')
    const [attempt,setAttempt] = useState(0)

    const positionChange = () => {
        let x = Math.random() * 100
        let y = Math.random() * 100
        console.log(x,y)
        setPosition([x,y])
        setAttempt(attempt + 1)
    }

    const theEnd = () => {
        setMessage('You won')
    }
  return (
    <div>
        <h2 className='heading'>Click me if you can</h2>
        <div>Number of Attempt: {attempt}</div>
        <div>{message}</div>

        <div onClick={theEnd} onMouseOver={positionChange} className='ball' style={{left:position[0] + '%' ,top:position[1] + '%' }}></div>
    </div>
  )
}
