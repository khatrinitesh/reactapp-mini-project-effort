import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/banner';


export default function Error() {

    const nav = useNavigate();
    const btnBack = () => {
        nav('/')
    }
  return (
    <div className='content'>
        <Banner bannerTitle="Error" bannerDesc="Lorem Ipsum"/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
