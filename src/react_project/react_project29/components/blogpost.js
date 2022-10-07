import React from 'react';
import classes from './blogpost.module.css';

export default function BlogPost({title,text}) {
  return (
    <article className={classes.post}>
        <h1>{title}</h1>
        <p>{text}</p>
    </article>
  )
}
