import React from 'react';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Movie from './pages/service';
import Error from './pages/error';


export default function CustomApp() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="service/:id" element={<Movie/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
  )
}
