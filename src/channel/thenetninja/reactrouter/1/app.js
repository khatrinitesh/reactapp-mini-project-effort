import React from 'react';
import {RouterProvider,createBrowserRouter,Route, createRoutesFromElements} from 'react-router-dom';

import Home from './home';
import About from './about';
import Service from './service';
import Faq from './help/faq';
import Contact from './help/contact';

import RootLayout from './rootlayout';
import HelpLayout from './helplayout';

const router = createBrowserRouter(
    createRoutesFromElements (
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path='/help' element={<HelpLayout/>}>
                <Route path="/help/faq" element={<Faq/>}/>
                <Route path="/help/contact" element={<Contact/>}/>
            </Route>
        </Route>
    )
)

export default function CustomApp() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
