import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './custom.css';

const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Program = React.lazy(() => import('./pages/programs'));
const ContactUs = React.lazy(() => import('./pages/contactus'));
const Error = React.lazy(() => import('./pages/error'));
const MainLayout = React.lazy(() => import('./mainlayout'));

export default function CustomApp() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/program" element={<Program/>}/>
                    <Route path="/contactus" element={<ContactUs/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
    </React.Suspense>
  )
}
