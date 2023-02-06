import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul>
       <li>
        <NavLink to="/" className='active'>Home</NavLink>
       </li>
       <li>
        <NavLink to="/about" className='active'>About</NavLink>
       </li>
       <li>
        <NavLink to="/service" className='active'>Service</NavLink>
       </li>
       <li>
        <NavLink to="/contact" className='active'>Contact</NavLink>
       </li>
      </ul>
    </header>
  )
}
