import React from 'react';
import {Outlet,Link,useNavigate} from 'react-router-dom';

export default function BlogLayout() {

  const navigation = useNavigate();

  const btnBack = () => {
    navigation('/')
  }
  return (
    <>
    <button onClick={btnBack}>Back</button>
        <nav>
          <Link  to="profile">Profile</Link>
          <Link exact to="account">Account</Link>
        </nav>
        <Outlet/>

    </>
  )
}
