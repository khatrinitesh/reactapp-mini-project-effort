import React from 'react';
import {BrowserRouter, Routes,Route,NavLink} from 'react-router-dom';

export default function CustomApp() {

    const Home = () => {
        return(
            <>Home</>
        )
    }
    const About = () => {
        return(
            <>About</>
        )
    }
    const Contact = () => {
        return(
            <>Contact</>
        )
    }
  return (
    <>
        <BrowserRouter>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/contact">Contact</NavLink>

         <Routes>
            <Route end path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
         </Routes>

        </BrowserRouter>
    </>
  )
}
