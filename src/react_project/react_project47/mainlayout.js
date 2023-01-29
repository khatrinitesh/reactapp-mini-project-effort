import React from 'react';
import { Outlet } from 'react-router-dom';


import Header from './components/header';
import Footer from './components/footer';

import ScrollBackTop from './repository/scrollbacktop';

export default function MainLayout() {
  return (
    <>
        <ScrollBackTop/>
        <Header/>
         <div className='main_content'>
            <Outlet/>
         </div>
        <Footer/>
    </>
  )
}
