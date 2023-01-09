import React,{ useId }  from 'react';

export default function CustomApp() {
    const firstId = useId();
    const secondId = useId();
    const thirdId = useId();


  return (
    <div className='custom'>
        <h3>The first id generated is {firstId}</h3>
        <p>The second id generated is {secondId}</p>
        <p>nitesh khatri {thirdId}</p>
    </div>
  )
}
