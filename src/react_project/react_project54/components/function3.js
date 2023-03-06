import React, { useState, useEffect, useRef } from "react";

export default function CustomFunction() {

    const [date, setDate] = useState(new Date());
    let interval = useRef();

    useEffect(() => {
        setTimeout(() => {
           clearInterval(interval.current) 
        }, 5000);
    },[]);

    useEffect(() => {
        console.log("component mounted");
        interval.current = setInterval(() => {
            console.log('display current time').
            setDate(new Date())
        },1000)

        return () => {
            clearInterval(interval.current);
            console.log('component unmounted');
        }
    },[])

    const unmount = () => {
        console.log('this is unmount');
      };
  return (
    <div>
        <div>Date: {date.toLocaleTimeString()}</div>
      <br />
      <button onClick={unmount}>Unmount Component</button>
    </div>
  )
}
