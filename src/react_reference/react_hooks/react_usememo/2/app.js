import React,{useMemo, useState} from 'react'

export default function CustomApp() {

    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);
    const [count3,setCount3] = useState(0);

    const handleClick1 = () => {
        setCount1(count1 + 1)
    }
    const handleClick2 = () => {
        setCount2(count2 + 1)
    }
    const handleClick3 = () => {
        setCount3(count3 + 1)
    }

    const checkOddEven = useMemo(() => {
        // let i = 0
        // while(i<1000000000) i++;
        return count1 % 2 === 0 ? true : false
    },[count1])
  return (
    <div>
        {count1} - {checkOddEven ? 'even' : 'odd'}
        <button onClick={handleClick1}>One</button>
        <br/>
        {count2}
        <button onClick={handleClick2}>Two</button>
        <br/>
        {count3}
        <button onClick={handleClick3}>Three</button>
    </div>
  )
}
