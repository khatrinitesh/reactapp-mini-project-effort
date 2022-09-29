import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const usenav = useNavigate()

    const btnBack = () => {
        usenav('/')
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Error"} bannerDesc={"Lorem Ipsum line paragraph"}/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
