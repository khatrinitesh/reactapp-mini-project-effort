import React,{useState,useEffect} from 'react';

export default function CustomApp() {

    const [hastime,setHastime] = useState(false);

    useEffect(() => {
       setTimeout(() => {
        setHastime(true)
       },2000)
    })
  return (
    <div>
        {hastime ? '5 seconds has passed!' : 'the timer is running...'}
    </div>
  )
}
