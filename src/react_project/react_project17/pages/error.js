import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const CustomNav = useNavigate();

    const btnBack = () => {
        CustomNav('/')
    }

  return (
    <div className='content'>
        <Banner bannerTitle={"Error page"} bannerDesc={"Est commodo veniam laborum consequat cupidatat irure magna reprehenderit aute non velit."}/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
