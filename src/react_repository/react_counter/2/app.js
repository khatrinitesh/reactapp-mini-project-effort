import React,{useState,useRef, useEffect} from 'react'

export default function CustomApp() {

    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log(count)
    },[count])

    function adjustCount(amt){
        setCount(currentamt => {
            return currentamt + amt
        })
    }


  return (
    <div>
        <button onClick={() => adjustCount(-1)}>-</button>
        <span>{count}</span>
        <button onClick={() => adjustCount(+1)}>+</button>
    </div>
  )
}
