import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/banner';

export default function Error() {

    const customnav = useNavigate();

    const btnBack = () => {
        customnav('/')
    }
  return (
    <div className='error_content'>
        <Banner bannerTitle={"Error page not found"} bannerDesc={"Aute ullamco exercitation consequat nostrud ullamco."}/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
