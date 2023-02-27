import { useState, useEffect } from 'react';

export default function CustomApp() {

      const [count, setCount] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevC) => prevC + 1)
        },1000)
        return () => clearInterval(interval);
      },[])
  return (
    <div>
        {count}
    </div>
  )
}
