import React from 'react'

export default function CustomApp() {

    const isLoggedIn = false;
  
    if(isLoggedIn){
        return(
            <>
             <h1>Welcome Back!!!</h1>
            </>
        )
    }
    else{
        <h2>Please Login first!!!</h2>
    }
}
