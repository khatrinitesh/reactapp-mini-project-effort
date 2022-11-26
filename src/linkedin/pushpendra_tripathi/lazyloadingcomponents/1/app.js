import React from 'react';
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Service = React.lazy(() => import('./pages/service'));

export default function CustomApp() {
  return (
    <Router>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>

        <React.Suspense>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
         </Routes>
        </React.Suspense>
    </Router>
  )
}
