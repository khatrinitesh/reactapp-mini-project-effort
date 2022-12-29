import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <>
        <CssBaseline/>
        <Navbar/>
        <Outlet/>
    </>
  )
}
