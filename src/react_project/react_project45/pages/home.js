import React from 'react';
import Banner from '../components/banner';
// import ConditionalRendering from '../components/conditionalrendering';
import ReadMore from '../components/readmore';
import CustomFetch from '../components/usefetch';
import ImageUploader from '../components/uploadfile';

export default function Home() {
  return (
    <div className='content'>
        <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
        {/* <ConditionalRendering/> */}
        <ReadMore/>
        <CustomFetch/>
        <ImageUploader/>
    </div>
  )
}
