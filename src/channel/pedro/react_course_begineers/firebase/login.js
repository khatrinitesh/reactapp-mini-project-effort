import React from 'react';
import {auth,provider} from './config/firebase';
import { useNavigate } from 'react-router-dom';

import { signInWithPopup } from 'firebase/auth';

export default function Login() {

  const navigate = useNavigate();
  

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth,provider)
    console.log(result)
    navigate('/')
  }
  return (
    <div>
        <p>Sign in with google to continue</p>
        <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}
