import React, {useCallback,useEffect } from 'react'

export default function CustomApp() {
    const onClick= useCallback(() => {
        console.log('clicked me')
    },[])
  return (
    <div>
        <button onClick={onClick}>CLick me</button>
    </div>
  )
}


