import React from 'react';
import Banner from '../components/banner';
import CustomTodo from '../components/todo/todo';

export default function About() {
  return (
    <div className='content'>
        <Banner bannerTitle={"About"} bannerDesc={"Officia voluptate laborum sit id est eiusmod veniam duis."}/>
        <CustomTodo/>
    </div>
  )
}
