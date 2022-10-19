import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Home from './home';
import Main from './main';
import Login from './login';
import Contact from './contact';

export default function app() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    </>
  )
}
