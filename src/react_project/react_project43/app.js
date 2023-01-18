import React from 'react';
import {RouterProvider, createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom';
import './custom.scss';

// LAYOUT
import MainLayout from './mainlayout';

// PAGES
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';
import Error from './pages/error';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
        </>
    )
)

export default function CustomApp() {
  return (
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}
