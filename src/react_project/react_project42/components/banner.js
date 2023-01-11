import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Banner({bannerTitle,bannerDesc}) {

    const nav = useNavigate();

    const btnBack = () => {
        nav('/')
    }
  return (
    <div className='banner_content'>
        <h3>{bannerTitle}</h3>
        <p>{bannerDesc}</p>
        <button onClick={btnBack}>Back homepage</button>
    </div>
  )
}
