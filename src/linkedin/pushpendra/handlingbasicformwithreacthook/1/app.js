import React, {useState} from 'react';


export default function CustomApp() {

    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [age,setAge] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,address,age);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
         <input type="text" value={name} onChange={handleName} placeholder="name"/>
         <input type="text" value={address} onChange={handleAddress} placeholder="address"/>
         <input type="text" value={age} onChange={handleAge} placeholder="age"/>
         <button type='submit'>Submit Data</button>
        </form>

        <div className='card'>
            {name}
            <br/>
            {address}
            <br/>
            {age}
        </div>
    </div>
  )
}
