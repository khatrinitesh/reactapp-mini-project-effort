import React,{useState} from 'react'

export default function CustomApp() {

    const [name,setName] = useState('');
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,address,phone);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter your name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Enter your address</label>
            <input type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
            <label>Enter your phone</label>
            <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <input type="submit"/>
        </form>
    </div>
  )
}
