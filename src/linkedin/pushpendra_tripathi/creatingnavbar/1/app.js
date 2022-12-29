import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Login from './login';
import Contact from './contact';
import Home from './home';
import Layout from './layout';


export default function CustomApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="login" element={<Login/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
