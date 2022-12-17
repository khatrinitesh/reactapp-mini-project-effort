import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';

export default function HelpLayout() {
  return (
    <div className='help_layout'>

        <h2>website help</h2>
        <p>Ullamco officia voluptate tempor sit Lorem sint culpa exercitation duis est. Nulla sint incididunt amet aliqua ullamco sit sint laborum commodo. </p>
       
        <nav>
            <NavLink to="/help/faq">View the faq</NavLink>
            <NavLink to="/help/contact">Contact us</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
