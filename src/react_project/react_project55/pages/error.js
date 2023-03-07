import React from 'react';
import Banner from '../components/banner';
import {useNavigate} from 'react-router-dom';

export default function Error() {

  const nav = useNavigate();

  const btnBack = () => {
    nav('/')
  }
  return (
    <div className='content'>
        <Banner bannerTitle="Error" bannerDesc="lorem ipsum"/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
