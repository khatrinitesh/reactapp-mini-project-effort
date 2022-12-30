import React,{useState} from 'react';


export default function About() {

    const [data,setData] = useState(true);
    const handleGet = () => {
        setData(!data)
    }
  return (
    <div>
        {data ? (<h1>nitesh khatri</h1>) : (<h2>Sameet Khatri</h2>)}
        <button onClick={handleGet}>Handle Click</button>
    </div>
  )
}
