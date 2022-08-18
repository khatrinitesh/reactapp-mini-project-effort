import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
        <CounterHooks intialCount={0}/>
    </div>
  )
}

function CounterHooks({intialCount}){
    console.log('Render Counter Hooks')
    const [count,setCount] = useState(intialCount)
    return(
        <>
         <button onClick={() => setCount(count => count + 1)}>+</button>
         <button onClick={() => setCount(count => count - 1)}>-</button>
         <button onClick={() => setCount(0)}>reset</button>
         {count}
        </>
    )
}
