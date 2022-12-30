import React,{useState} from 'react';

export default function Home() {
    const [show,setShow] = useState(false);
    const showClick = () => {
        setShow(true);
    }
  return (
    <div>
        <button onClick={showClick}>Show Data</button>
        {show && <h1>Home</h1>}
    </div>
  )
}
