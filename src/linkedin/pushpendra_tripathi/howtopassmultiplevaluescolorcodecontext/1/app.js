import React,{useContext} from 'react';
import Home from './home';
import UserContext from './usecontext';


export default function CustomApp() {

    useContext(UserContext);

    const details = [
        {
            id:1,name:'nitesh',address:'india'
        },
        {
            id:2,name:'sameet',address:'usa'
        },
    ]
    const nameColorcode = {
        color:'red'
    }

    const addressColorcode = {
        color:'orange'
    }
  return (
    <div>
        <UserContext.Provider value={{details,nameColorcode,addressColorcode}}>
            <Home/>
        </UserContext.Provider>
    </div>
  )
}
