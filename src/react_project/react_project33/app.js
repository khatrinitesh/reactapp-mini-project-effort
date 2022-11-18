import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


const Home = React.lazy(() => './pages/home.js');
const About = React.lazy(() => './pages/about.js');
const Service = React.lazy(() => './pages/service.js');
const Contact = React.lazy(() => './pages/contact.js');
const Error = React.lazy(() => './pages/error.js');

const CustomMain = React.lazy(() => './pages/main.js');

export default function CustomApp() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<CustomMain/>}> 
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Route>
       <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}
