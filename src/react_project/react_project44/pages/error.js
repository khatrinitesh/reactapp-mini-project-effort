import React from 'react';
import Banner from '../components/banner';

import { useNavigate } from 'react-router-dom';

export default function Error() {
    const nav = useNavigate();

    const btnBack = () => {
        nav('/')
    }
  return (
    <div className='error_content'>
        <Banner bannerTitle="Page not found" bannerDesc="Lorem Ipsum"/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
