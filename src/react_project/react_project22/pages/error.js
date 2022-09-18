import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const clickBack = useNavigate();

    const btnBack = () => {
        clickBack('/')
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Error"} bannerDesc={"Quis dolor anim consectetur cupidatat voluptate eiusmod nostrud commodo minim anim."}/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
