import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <ul>
            <li>
                <NavLink to='/' activeClassName>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' activeClassName>About</NavLink>
            </li>
            <li>
                <NavLink to='/service' activeClassName>Service</NavLink>
            </li>
            <li>
                <NavLink to='/contact' activeClassName>Contact</NavLink>
            </li>
        </ul>
    </header>
  )
}
