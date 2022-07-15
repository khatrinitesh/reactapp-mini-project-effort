import React from 'react'

export default function Banner(props) {
    const {bannerTitle,bannerDesc} = props
  return (
    <div className='banner_title'>
        <h3>{bannerTitle}</h3>
        <p>{bannerDesc}</p>
    </div>
  )
}
