import React from 'react';
import {Outlet} from 'react-router-dom';
import BlogAction from '../components/blogaction';

export default function BlogLayout() {
  return (
    <>
    <BlogAction></BlogAction>
    <Outlet/>
    </>
  )
}
