import React from 'react';
import Banner from '../components/banner';
import CustomTodo from '../components/todo/todo';

export default function About() {
  return (
    <div className='content'>
        <Banner bannerTitle={"About"} bannerDesc={"Reprehenderit adipisicing pariatur culpa adipisicing ex dolore incididunt duis esse reprehenderit qui."}/>
        <CustomTodo/>
    </div>
  )
}
