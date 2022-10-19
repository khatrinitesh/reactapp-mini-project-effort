import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/home';
import Login from './pages/login';
import Contact from './pages/contact';
import Error from './pages/error';
import {store} from './store';


export default function CustomApp() {

    
  return (
    <Provider store={store}>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
    </Provider>
  )
}
