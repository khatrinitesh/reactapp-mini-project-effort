import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

export default function Main() {
  return (
    <React.Fragment>
        <Header/>
        <div className='main_content'>
            <Outlet/>
        </div>
        <Footer/>
    </React.Fragment>
  )
}
