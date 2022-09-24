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
        <Banner bannerTitle={"Error"} bannerDesc={"Reprehenderit adipisicing pariatur culpa adipisicing ex dolore incididunt duis esse reprehenderit qui."}/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
