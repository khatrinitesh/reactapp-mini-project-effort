import React,{useState,useRef} from 'react'

export default function CustomApp() {

    const emailRef = useRef();
    const pwdRef = useRef();

    function onSubmit(e){
        e.preventDefault();
        console.log({email:emailRef.current.value,password:pwdRef.current.value})
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor='email'>Email</label>
            <input type='email' id="email" ref={emailRef}/>
            <label htmlFor='password'>Password</label>
            <input type='password' id="password" ref={pwdRef}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
