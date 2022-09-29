import React from 'react';
import { Outlet } from 'react-router-dom';

// COMPONENTS
import Header from './components/header';
import Footer from './components/footer';

export default function CustomMain() {
  return (
    <>
        <Header/>
         <div className='main_content'>
            <div className='container'>
                <Outlet/>
            </div>
         </div>
        <Footer/>
    </>
  )
}
