import React from 'react'

export default function Banner({bannerTitle,bannerDesc}) {
  return (
    <div className='content'>
      <h3 className='bannertitle'>{bannerTitle}</h3>
      <p className='bannerdesc'>{bannerDesc}</p>
    </div>
  )
}
