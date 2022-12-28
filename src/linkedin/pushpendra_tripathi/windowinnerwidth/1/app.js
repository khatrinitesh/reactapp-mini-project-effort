import React from 'react'

export default function CustomApp() {
  return (
    <div>
        {window.innerWidth > 480 ? (<h1>nitesh khatri</h1>) : (<h1>sameet khatri</h1>)}
    </div>
  )
}
