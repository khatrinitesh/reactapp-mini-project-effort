import React,{useState} from 'react';

export default function CustomApp() {
    const [show,setShow] = useState(false);
    const [color,setColor] = useState(false);

    const handleClick = () => {
        setShow(!show)
        setColor(true);
    }
  return (
    <div>
        {show && <p className={color && 'title'}>Nitesh khatri</p>}
        <button onClick={handleClick}>Show me</button>
    </div>
  )
}
