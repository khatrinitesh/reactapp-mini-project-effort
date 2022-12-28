import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';

import Error from './pages/error';

import MainContent from './mainlayout';

export default function app() {
  return (
    <BrowserRouter> 
        <Routes>
         <Route path='/' element={<MainContent/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
         </Route>
         <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}
