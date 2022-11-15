import React,{useState} from 'react'

export default function CustomApp() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const savePost = (e) => {
        e.preventDefault();
        console.log(name,email)
    }

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,email
        })
    })
  return (
    <div>
      <form onSubmit={savePost}>
       <input type='text' value={name} placeholder="enter your name" onChange={(e) => setName(e.target.value)}/>
       <input type='text' value={email} placeholder="enter your email" onChange={(e) => setEmail(e.target.value)}/>
       <button type='submit'>save</button>
      </form>
    </div>
  )
}
