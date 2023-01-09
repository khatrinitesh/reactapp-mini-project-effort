import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/banner';

export default function Error() {

    const nav = useNavigate();

    const btnBack = () => {
        nav("/");
    }
  return (
    <div className='error_content'>
      <Banner bannerTitle="page not found" bannerDesc="Lorem ipsum"/>
      <a onClick={btnBack}>Click to back homepage</a>
    </div>
  )
}
