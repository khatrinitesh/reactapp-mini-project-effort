import React from 'react';
import Banner from '../components/banner';
import IconBar from '../repository/iconbar';
import MenuHamburger from '../repository/menuhamburger';
import CustomAccordion from '../repository/accordion';
import SearchFilter from '../repository/searchfilter';

export default function About() {
  return (
    <div className='content'>
        <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
        <SearchFilter/>
        <CustomAccordion/>
        <MenuHamburger/>
        <IconBar/>
    </div>
  )
}
