import React from 'react'

export default function Banner({bannerTitle,bannerDesc}) {
  return (
    <div className='banner_title'>
        <h3 className='title'>{bannerTitle}</h3>
        <p className='desc'>{bannerDesc}</p>
    </div>
  )
}
