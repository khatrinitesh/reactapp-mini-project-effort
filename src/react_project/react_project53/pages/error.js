import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const btn = useNavigate();

    const btnBack = () => {
        btn('/')
    }
  return (
    <div className='main_content'>
        <Banner bannerTitle="Error" bannerDesc="Lorem Ipsum"/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
