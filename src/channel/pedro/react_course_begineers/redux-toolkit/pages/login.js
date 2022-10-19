import React,{useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import {login,logout} from '../store';

export default function Login() {

    const [ newUsername,setNewusername] = useState('');

    const dispatch = useDispatch();

    const username = useSelector((state:any) => state.user.value.username);
  return (
    <div>
        <h1>This is the login page</h1>
        <input onChange={(e) => setNewusername(e.target.value)}/>
        <button onClick={() => dispatch(login({username:newUsername}))}>Submit Login</button>
        <button>Logout</button>
    </div>
  )
}
