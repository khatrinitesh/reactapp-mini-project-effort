import React from 'react';
import Program from './programs';
import About from './about';
import ContactUs from './contactus';
import SlideShow from '../components/slideshow';

export default function Home() {
  return (
    <div className="content home_content">
      <SlideShow/>
        <Program/>
        <About/>
        <ContactUs/>
    </div>
  )
}
