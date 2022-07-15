import React from 'react';

export default function Footer() {


    var cond = true;

    const decor = {textDecoration:'line-through'}
  return (
    <footer>
        <p style={cond === true ? decor : null}>&copy; copyright {new Date().getFullYear()}</p>
    </footer>
  )
}
