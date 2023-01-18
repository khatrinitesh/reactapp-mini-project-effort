import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/navbar';

export default function RootLayout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}
