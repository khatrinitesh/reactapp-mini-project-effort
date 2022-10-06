import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Error page not found"} bannerDesc={"Do mollit amet laboris esse amet est sit nulla nostrud sunt aute anim."}/>
        <button onClick={btnBack}>Return to hompage</button>
    </div>
  )
}
