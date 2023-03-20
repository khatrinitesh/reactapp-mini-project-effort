import React from 'react';
import Banner from '../components/banner';
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className='content'>
        <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
        <Marquee direction="right" speed="100" gradientColor="[155,155,555]">
            I can be a React component, multiple React components, or just some text.
        </Marquee>
    </div>
  )
}
