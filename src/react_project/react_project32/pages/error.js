import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const btnNav = useNavigate();

    function GoBack(){
        btnNav('/');
    }
  return (
    <div className='content'>
      <Banner bannerTitle={"Error page not found"} />

      <button onClick={GoBack}>Return to homepage</button>
    </div>
  )
}
