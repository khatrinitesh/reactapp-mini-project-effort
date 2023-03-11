import React from 'react'

export default function Banner({bannerTitle,banerDesc}) {
  return (
    <div className="banner_content">
        <h3>{bannerTitle}</h3>
        <p>{banerDesc}</p>
    </div>
  )
}
