import React ,{useRef} from 'react';
import useOnClickOutside from 'use-onclickoutside';

export default function CustomApp() {
  return (
    <div>
        <CustomOutside/>
    </div>
  )
}

function CustomOutside({close}){
    const ref = useRef(null)

    useOnClickOutside (ref,close)
    return(
        <>
           <div ref={ref}>{'Model content'}</div>
        </>
    )
}