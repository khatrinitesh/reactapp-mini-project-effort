import React,{useState} from 'react';


export default function CustomApp() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [error,setError] = useState(false)

    const handleClick =()=>{
        console.log(name,email)
        if(!name || !email){
            setError(true)
            return false
        }
    }


  return (
    <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
        <br/>
        <br/>
        {error && !name && <p>Enter your name</p>}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        {error && !email && <p>Enter your email</p>}
        <button onClick={handleClick}>Handle Click</button>
    </div>
  )
}
