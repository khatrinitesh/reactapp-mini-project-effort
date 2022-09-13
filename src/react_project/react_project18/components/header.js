import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <ul>
            <li>
                <NavLink to="/" activeClassName="active">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/service" activeClassName="active">
                    Service
                </NavLink>
            </li>
            <li>
                <NavLink to="/page/blogpost" activeClassName="active">
                    Blog Post
                </NavLink>
            </li>
            <li>
                <NavLink to="/creaturedetail/:userId" activeClassName="active">
                    Creature 
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeClassName="active">
                    Contact
                </NavLink>
            </li>
        </ul>
    </header>
  )
}
