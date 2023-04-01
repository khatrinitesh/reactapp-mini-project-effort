import React from 'react';
import {Link,Outlet,useParams} from 'react-router-dom';

export default function Users({users}) {

    const {userId} = useParams();
  return (
    <div>
        <h2>User: {userId}</h2>
        <Link to="/users">Back to Users</Link>

        <ul>
        {users.map((user) => (
            <li key={user.id}>
                <Link to={user.id}>
                    {user.fullName}
                </Link>
            </li>
        ))}
        </ul>

        <Outlet/>   
    </div>
  )
}
