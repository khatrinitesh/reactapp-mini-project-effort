import React from 'react';
import Banner from '../components/banner';
import One from '../repository/slideshow/2/app';

export default function About() {
  return (
    <div className='content'>
        <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
        <One/>
    </div>
  ) 
}
