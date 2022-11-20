import { ConstructionOutlined } from '@mui/icons-material';
import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
        <MathExample/>
    </div>
  )
}


const MathExample = () => {
    const [counter,setCounter] = useState(0);
    const [visibility,setVisiblity] = useState(false)

    const handleClick  =()=> {
        if(counter > 10){
            setVisiblity(true)
        }
        return setCounter(counter  + 1)
    }

    const resetCounter = () => {
        setCounter(0)
        setVisiblity(false)
    }
    console.log('counter',counter)
    return(
        <>
         <button onClick={handleClick}>Click me</button>
         {visibility === true && <button onClick={resetCounter}>Reset button</button>}
        </>
    )
}