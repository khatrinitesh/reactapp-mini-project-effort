import React from 'react';
import {NavLink} from 'react-router-dom';

<<<<<<< HEAD


=======
>>>>>>> d902be640f29ac20838702ffa91e7d6fe6587d3b
export default function Header() {
  return (
    <header>
        <ul>
            <li>
                <NavLink to="/" activeClassName='active'>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName='active'>About</NavLink>
            </li>
            <li>
                <NavLink to="/service" activeClassName='active'>Service</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeClassName='active'>Contact</NavLink>
            </li>
        </ul>
    </header>
  )
}
