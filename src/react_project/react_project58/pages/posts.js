import React from 'react';
import { Outlet } from "react-router-dom"

export default function Posts() {
  return (
    <div>
         <h1>List of posts go here!</h1>
        <Outlet />
    </div>
  )
}
