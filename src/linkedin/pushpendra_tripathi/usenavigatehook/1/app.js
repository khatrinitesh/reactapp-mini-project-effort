import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Login from './login';
import Profile from './profile'

export default function CustomApp() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>
    </div>
  )
}
