import React,{lazy,Suspense} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './custom.scss';


// component
import ScrollBackTop from './components/scrollbacktop';

// pages
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Service = lazy(() => import('./pages/service'));
const Contact = lazy(() => import('./pages/contact'));
const Error = lazy(() => import('./pages/error'));

// main layout
const MainContent = lazy(() => import('./main'));


export default function CustomApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <ScrollBackTop/>
        <Router>
        <Routes>
            <Route path="/" element={<MainContent/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
        </Routes>
        </Router>
    </Suspense>
  )
}
