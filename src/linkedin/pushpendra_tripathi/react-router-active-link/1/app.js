import React from 'react';
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';

export default function CustomApp() {
  return (
    <BrowserRouter>
     <NavLink to="/" className={({isActive}) => isActive ? 'link-active' :'link'}>Home</NavLink>
     <NavLink to="/about" className={({isActive}) => (isActive ? 'link-active' : 'link')}>About</NavLink>
     <NavLink to="/service" className={({isActive}) => (isActive ? 'link-active' : 'link')}>Service</NavLink>

     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
     </Routes>
    </BrowserRouter>
  )
}


function Home(){
    return(
        <><h1>Home page</h1></>
    )
}
function Service(){
    return(
        <><h1>Service page</h1></>
    )
}
function About(){
    return(
        <><h1>About page</h1></>
    )
}