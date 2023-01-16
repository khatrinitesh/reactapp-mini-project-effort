import React,{useState} from 'react';

export default function CustomApp() {

    const initialCount = 0;
    const [count,setCount] = useState(initialCount);

    const btnInc = () => {
        setCount(c => c + 1)
    }
    const btnDec = () => {
        setCount(c => c - 1)
    }
    const btnRes = () => {
        setCount(0)
    }

    const incrementByFive = () => {
        for(let i=0;i<5;i++){
            setCount((prevCount) => prevCount + 1)
        }
    }
  return (
    <div>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnRes}>Reset</button>

        <button onClick={incrementByFive}>Incrment by Five</button>
    </div>
  )
}
