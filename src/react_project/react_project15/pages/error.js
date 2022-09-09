import React from 'react';
import {useNavigate} from 'react-router-dom';
import Banner from '../components/banner';

export default function error() {
    const navg = useNavigate();

    const handleBack = () => {
        navg('/')
    }
  return (
    <div className='error_content'>
        <Banner bannerTitle="Page not found" bannerDesc="Lorem Ipsum is paragraph."/>
        <button onClick={handleBack}>Return to homepage</button>
    </div>
  )
}
