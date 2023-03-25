import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
<<<<<<< HEAD

import './custom.scss';

=======
import './custom.scss';


>>>>>>> d902be640f29ac20838702ffa91e7d6fe6587d3b
const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Service = React.lazy(() => import('./pages/service'));
const Contact = React.lazy(() => import('./pages/contact'));
const Error = React.lazy(() => import('./pages/error'));

const MainLayout = React.lazy(() => import('./mainlayout'));

<<<<<<< HEAD
export default function CustomApp() {
=======
export default function app() {
>>>>>>> d902be640f29ac20838702ffa91e7d6fe6587d3b
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
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
