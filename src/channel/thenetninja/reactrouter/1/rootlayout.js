import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/help">Help</NavLink>
            </nav>
        </header> 
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
