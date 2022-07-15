import React,{Suspense} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Service = React.lazy(() => import('./pages/service'));
const Contact = React.lazy(() => import('./pages/contact'));
const Error = React.lazy(() => import('./pages/error')); 

const Layout = React.lazy(() => import('./layout'));

export default function CustomApp() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <Router>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
    </React.Suspense>
  )
}
