import React from 'react';
import { useMedia } from 'use-media';

export default function CustomApp() {
  return (
    <div>
        <WindowMedia/>
    </div>
  )
}


function WindowMedia(){
    const isWide = useMedia({minWidth:700});
    const reduceMotion = useMedia('(prefers-reduced-motion: reduce)');

    return(
        <>
         <div>
            Screen is wide: {isWide ? 'smile' : 'sad'}
         </div>
        </>
    )
}