import React from 'react';
import Banner from '../components/banner';
import {useNavigate} from 'react-router-dom';

export default function Service() {

    const navigation = useNavigate();

    const btnBack = () => {
        navigation('/')
    }
  return (
    <div className='content'>
        <Banner bannerTitle="Error page not found page" bannerDesc="Lorem Ipsum"/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
