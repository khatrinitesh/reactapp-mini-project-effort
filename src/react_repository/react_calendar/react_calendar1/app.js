import React, { useState,useEffect } from 'react';
import moment from 'moment'; 

export default function CustomApp() {
  return (
    <div>
        <Wall/>
    </div>
  )
}


const Wall = (props) => {
    const [time,setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()),100)
    },[])

    return <Clock time={time}/>
}

function Clock(props){
    const {time} = props;

    console.log('rendered');
    return(
        <>
         <div>{formatTime(time)}</div>
        </>
    )
}

const formatTime = (time) => {
    return (
        <>
        {moment(time).format('DD-MM-YYYY HH:mm A')}
        </>
    )
    
}