import React from 'react';
import Banner from '../components/banner';
import CustomFunction from '../components/function6';

export default function Home() {
  return (
    <div className='content'>
        <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
        <CustomFunction/>
    </div>
  )
}
