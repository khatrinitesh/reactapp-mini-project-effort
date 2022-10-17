import React,{useState} from 'react'

 export default function CustomApp() {

    const [count,setCount] = useState(0);

    const btnInc = () => {
        setCount((prev) => prev + 1)
    }
    const btnDec = () => {
        setCount((prev) => prev - 1)
    }
    const btnRes = () => {
        setCount(0)
    }
  return (
    <div>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnRes}>Reset</button>
    </div>
  )
}