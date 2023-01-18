import React from 'react';

export default function Banner({bannerTitle,bannerDesc}) {
  return (
    <div className='banner_content'>
        <h2 className='bannertitle'>{bannerTitle}</h2>
        <p className='bannerdesc'>{bannerDesc}</p>
    </div>
  )
}
