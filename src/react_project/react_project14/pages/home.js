import React from 'react';
import Banner from '../components/banner';

export default function Home() {

    var userIsRegistered = false
  return (
    <div className='content'>
        <Banner bannerTitle={"Home"} bannerDesc={"Lorem Ipsum"}/>
        <Form cond={userIsRegistered}/>
    </div>
  )
}


function Form(props){
    return(
        <form>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            {props.cond  ? <input type="password" placeholder="confirm password"/> : null}
            <button type="submit">{props.cond ? 'Sign in' : 'Register'}</button>
        </form>
    )
}