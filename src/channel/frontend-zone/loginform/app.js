import React,{useState} from 'react';
import LoggedIn from "./component/loggedin";
import LoginForm from "./component/loginform";

export default function CustomApp() {

    const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div>
        {isLoggedIn? (
            <LoggedIn setIsLoggedIn={setIsLoggedIn}/>
        ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
        )}
    </div>
  )
}


