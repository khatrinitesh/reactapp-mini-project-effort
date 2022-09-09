import React from 'react';
import Banner from '../components/banner';
import CustomToDo from '../components/todo/todo';

export default function Contact() {

  return (
    <div className='content'>
        <Banner bannerTitle={"Contact page"} bannerDesc={"Est commodo veniam laborum consequat cupidatat irure magna reprehenderit aute non velit."}/>
        <CustomToDo/>
    </div>
  )
}
