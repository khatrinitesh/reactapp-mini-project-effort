import React from 'react';
import useFetch from "./usefetch";
import { useNavigate, useParams } from "react-router-dom";

export default function productdetail() {

    const { userId } = useParams();

    const { data: user, error, isPending } = useFetch('http://localhost:3000/users/' + userId);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/users/' + user.userId, {
          method: 'DELETE'
        }).then(() => {
            navigate.push('/');
        }) 
      }
  return (
    <>
      <div className="blog-details">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { user && (
            <article>
            <h2>{ user.title }</h2>
            <p>Written by { user.author }</p>
            <div>{ user.body }</div>
            <button onClick={handleClick}>delete</button>
            </article>
        )}
        </div>
    </>
  )
}
