import React,{useState} from 'react';

export default function CustomApp() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [allNewUser,setAllNewUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {email,password}
        setAllNewUser([...allNewUser,newUser])
        setEmail('')
        setPassword('')
    }

    const passwordChange = (e) => {
        setPassword(e.target.value)
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="Email">Email</label>
                <input type="text" onChange={emailChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor="Password">Password</label>
                <input type='text' name="password" value={password} onChange={passwordChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
        {allNewUser}
    </div>
  )
}
