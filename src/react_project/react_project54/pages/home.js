import React from 'react';
import Banner from '../components/banner';
import ConditionalOne from '../components/conditional1';

export default function Home() {
  return (
    <div className='content'>
        <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
        <ConditionalOne/>
    </div>
  )
}
