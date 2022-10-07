import React from 'react'

export default function Banner({bannerTitle,bannerDesc}) {
  return (
    <div className='banner_content'>
        <h3>{bannerTitle}</h3>
        <h3>{bannerDesc}</h3>
    </div>
  )
}
