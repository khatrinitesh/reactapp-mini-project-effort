import React,{useState} from 'react';

export default function CustomApp() {

    const [message,setMessage] = useState('');
  return (
    <div>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
        <button  disabled={!message}>Click</button>
    </div>
  )
}


// const Home = () => {
//     return(
//         <>
//         Home page</>
//     )
// }


