import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navg = useNavigate()
    const btnBack = () => {
        navg('/')
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Error page"} bannerDesc={"Lorem Ipsum"}/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
