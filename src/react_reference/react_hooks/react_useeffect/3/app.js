import React,{useState,useEffect} from 'react'

export default function CustomApp() {

    const [count,setCount] = useState(0);
    const [name,setName] = useState('');

    useEffect(() => {
        console.log('useeffect - updating document title');
        document.title = `you have clicked ${count}`
    },[count]);
  return (
    <div>
        <h1>{count}</h1>

        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}
