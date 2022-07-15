import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
        <Exmple/>
    </div>
  )
}


function Exmple(){
    const [count,setCount] = useState(0)
    const [prevCount,setPrevCount] = useState(0)

    if(count !== prevCount){
        console.log('count,precount',count,prevCount)
        setPrevCount(count)
    }
    return(
        <>
         <h2>{count}</h2>
         <h2>{prevCount}</h2>
         <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}