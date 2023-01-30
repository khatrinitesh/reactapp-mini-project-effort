import React from 'react';
import { Link } from 'react-router-dom';


export default function product({users}) {
  return (
    <div className="blog-list">
        {users.map(user => (
        <div className="blog-preview" key={user.id} >
            <Link to={`/users/${user.id}`}>
            <h2>{ user.title }</h2>
            <p>Written by { user.author }</p>
            </Link>
        </div>
        ))}
  </div>
  )
}
