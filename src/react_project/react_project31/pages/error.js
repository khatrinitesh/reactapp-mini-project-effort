import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Error"} bannerDesc={"Officia voluptate laborum sit id est eiusmod veniam duis."}/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
