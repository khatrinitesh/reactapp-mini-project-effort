import React from 'react';
import {Link} from 'react-router-dom';
import classes from './posts.module.css';

export default function Posts({blogPosts}) {
  return (
    <ul className={classes.post}>
        {blogPosts.map((post) => {
            return(
                <li key={post.id}>
                    <Link to={post.id.toString()}>
                        <h2>{post.title}</h2>
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}
