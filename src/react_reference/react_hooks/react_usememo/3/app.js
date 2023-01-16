import React,{useState,useMemo} from 'react';


export default function CustomApp() {

    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);


    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i=0;
        let j=0;
        while(i<90 && j<100)
        i=j++;
        return counterOne % 2 === 0;
    },[counterOne])
  return (
    <div>
        <button onClick={incrementOne}>Increment One {counterOne}</button>
        <br/>
        <span>{isEven ? 'even' : 'odd'}</span>
        <br/>
        <button onClick={incrementTwo}>Increment two {counterTwo}</button>
    </div>
  )
}
