import React from 'react';
import {Outlet} from 'react-router-dom';

<<<<<<< HEAD

=======
>>>>>>> d902be640f29ac20838702ffa91e7d6fe6587d3b
import Header from './components/header';
import Footer from './components/footer';

export default function MainLayout() {
  return (
    <>
        <Header/>
<<<<<<< HEAD
         <div className="main_content">
=======
         <div className='main_content'>
>>>>>>> d902be640f29ac20838702ffa91e7d6fe6587d3b
            <Outlet/>
         </div>
        <Footer/>
    </>
  )
}
