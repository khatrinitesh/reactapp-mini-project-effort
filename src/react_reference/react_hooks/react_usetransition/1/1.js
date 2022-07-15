import React,{useState,useTransition} from 'react';

export default function CustomApp() {
    const [showCounter,setShowCounter] = useState(false);
    const [count,setCount] = useState(0)
    const [isPending,startTransition] = useTransition();


    const onClick = () => {
        startTransition(() => {
            setShowCounter((prev) => prev + !prev)
        });
        setCount((prev) => prev + 1)
    }

  return (
    <div>
        {isPending && <h1>Loading....</h1>}
        <button onClick={onClick}>Click me</button>
        {showCounter && <div>{count}</div>}
    </div>
  )
}
