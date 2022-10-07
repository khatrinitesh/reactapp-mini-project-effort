import React from 'react';
import {Link} from 'react-router-dom';
import classes from './blogaction.module.css';

export default function BlogAction() {
  return (
    <div className={classes.actions}>
        <Link className={classes.button} to="/blog/new">Add Post</Link>
    </div>
  )
}
