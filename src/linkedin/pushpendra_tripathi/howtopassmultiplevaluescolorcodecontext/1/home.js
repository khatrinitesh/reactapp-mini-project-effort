import React,{useContext} from 'react';
import UserContext from './usecontext';

export default function Home() {

    const context = useContext(UserContext);
    console.log(context);
  return (
    <div>
      {context.details.map((user) => {
        return(
            <div key={user.id}>
             <h1 style={{color:context.nameColorcode.color}}>{user.name}</h1>
             <p style={{color:context.addressColorcode.color}}>{user.address}</p>
            </div>
        )
      })}
    </div>
  )
}
