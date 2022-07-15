import React from 'react'
import useClippy from 'use-clippy'

export default function CustomApp() {
  return (
    <div>
        <CustomClippy/>
    </div>
  )
}

function CustomClippy(){
    const [clipboard,setClipboard] = useClippy();
    return(
        <>
         <p>Data in clipboard is {clipboard}</p>

         <button onClick={() => setClipboard('nitesh khatri')}>update clipboard</button>
        </>
    )
}