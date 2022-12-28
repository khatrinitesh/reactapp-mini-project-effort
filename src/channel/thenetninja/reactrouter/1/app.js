import React from 'react';
import {RouterProvider,createBrowserRouter,Route, createRoutesFromElements} from 'react-router-dom';
import './custom.css';


// pages
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Faq from './pages/help/faq';
import Contact,{contactAction} from './pages/help/contact';
import Error from './pages/error';
import Careers,{careersLoader} from './pages/careers/careers';
import CareerDetails,{careerDetailsLoader} from './pages/careers/careerdetails';
import CareersError from './pages/careers/careererror';

// layouts
import RootLayout from './layout/rootlayout';
import HelpLayout from './layout/helplayout';
import CareersLayout from './layout/careerslayout';

const router = createBrowserRouter(
    createRoutesFromElements (
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="service" element={<Service/>}/>
            {/* HELP LAYOUT */}
            <Route path='help' element={<HelpLayout/>}>
                <Route path="faq" element={<Faq/>}/>
                <Route path="contact" action={contactAction} element={<Contact/>}/>
            </Route>

            {/* CAREERS */}
            <Route path="careers" element={<CareersLayout/>} errorElement={<CareersError/>}>
              <Route index element={<Careers/>} loader={careersLoader}/>
              <Route path=":id" element={<CareerDetails/>} loader={careerDetailsLoader}/>
            </Route>
            {/* ERROR PAGE */}
            <Route path="*" element={<Error/>}/>
            
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
