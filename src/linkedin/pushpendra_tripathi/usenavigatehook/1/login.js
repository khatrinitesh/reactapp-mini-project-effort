import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {

    let navigate = useNavigate();
  return (
    <div>
        <input type='text' placeholder='Name'/>
        <br/>
        <input type='password' placeholder='Password'/>
        <button onClick={() => navigate('/profile')}>Login</button>
    </div>
  )
}
