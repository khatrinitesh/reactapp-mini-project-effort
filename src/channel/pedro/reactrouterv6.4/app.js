import React from 'react';
import {RouterProvider, createBrowserRouter,createRoutesFromElements,Route,Link,Outlet } from 'react-router-dom';
import Home from './home';
import About from './about';
import {Data,dataLoader} from './data';




export default function CustomApp() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/data" element={<Data/>} loader={dataLoader}/>
            </Route>
        )
    )

  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}


const Root = () => {
    return(
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/data">Data</Link>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}
