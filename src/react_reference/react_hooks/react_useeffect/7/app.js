import {  useEffect } from 'react';

export default function CustomApp() {


   useEffect(() => {
    const handleClick =() => console.log('clicked!');
    window.addEventListener('click',handleClick);

    return () => {
        console.log('Cleaning up!');
        window.removeEventListener("click",handleClick)
    }
   },[]);
  return (
    <div>
        {/* <button onClick={handleClick}>Click</button> */}
    </div>
  )
}
