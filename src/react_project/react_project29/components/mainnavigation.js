import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './mainnavigation.module.css';

export default function MainNavigation() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive  ? classes.active :undefined} end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined} end>Blog</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
