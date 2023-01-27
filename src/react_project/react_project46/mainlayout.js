import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scrollbacktop';

export default function MainLayout() {
  return (
    <>
      <ScrollToTop/>
        <Header/>
         <div className='main_content'>
            <Outlet/>
         </div>
        <Footer/>
    </>
  )
}
