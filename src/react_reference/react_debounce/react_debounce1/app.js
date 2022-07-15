import React, { useState } from 'react';
import {  useDebouncedCallback } from 'use-debounce';

export default function CustomApp() {
  return (
    <div>
        <CustomDebounce/>
    </div>
  )
}

function CustomDebounce({defaultValue}){
    const [value,setValue] = useState(defaultValue);

    const debounced = useDebouncedCallback((value) => {
        setValue(value);
    },
    // delay 
    100)

    return(
        <>
         <div>
            <input defaultValue={defaultValue} onChange={(e) => debounced(e.target.value)}/>
            <p>Debounced value: {value}</p>
         </div>
        </>
    )
}