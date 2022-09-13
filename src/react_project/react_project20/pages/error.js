import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {
    
    const navg = useNavigate();
    const btnBack = () => {
        navg('/')
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Error"} bannerDesc={"Fugiat labore est labore ullamco dolore sit non.Esse occaecat consectetur adipisicing excepteur commodo non voluptate veniam Lorem adipisicing anim do et eiusmod."}/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
