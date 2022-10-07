import React from 'react';
import classes from './newpostform.module.css';

export default function NewPostForm({onCancel,onSubmit,submitting}) {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
        <fieldset>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required minLength={5}/>
        </fieldset>
        <fieldset>
            <label htmlFor="text">Post Text</label>
            <textarea id="text" name="post_text" required minLength={10} rows={5}></textarea>
        </fieldset>
        <button onClick={onCancel} type='button' disabled={submitting}>Cancel</button>
        <button disabled={submitting}>{submitting?  ' Submitting...' : 'create post'}</button>
    </form>
  )
}
