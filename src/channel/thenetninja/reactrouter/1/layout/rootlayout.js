import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import BreadCrumbs from '../components/breadcrumbs';

export default function RootLayout() {
  return (
    <div>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="service">Service</NavLink>
                <NavLink to="help">Help</NavLink>
                <NavLink to="careers">Careers</NavLink>
            </nav>
            <BreadCrumbs/>
        </header> 
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
