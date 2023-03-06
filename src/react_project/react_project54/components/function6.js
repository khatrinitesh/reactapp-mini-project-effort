import React,{useState,useCallback} from 'react';

export default function CustomFunction() {
    
    const [count,setCount] = useState(0);
    //   };


    const handleIncrement = useCallback(() => {
        setCount(count + 1)
    },[count])

    const handleDelayedIncrement = useCallback(() => {
        setTimeout(() => {
            setCount(count + 1)
        },1000)
    },[count])
    
  

  return (
    <div className='content'>
        {count}
        <button onClick={handleIncrement}>Instant Increment</button>
        <button onClick={handleDelayedIncrement}>Delayed increment</button>
    </div>
  )
}
