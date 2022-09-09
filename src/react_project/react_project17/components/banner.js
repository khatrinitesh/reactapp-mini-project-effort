import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Banner({bannerTitle,bannerDesc}) {
    const customNav = useNavigate()
    const btnBack = () => {
        customNav('/')
    }
  return (
    <div className='banner_content'>
        <h3>{bannerTitle}</h3>
        <p>{bannerDesc}</p>
    </div>
  )
}
