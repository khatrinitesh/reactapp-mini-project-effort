import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Error() {

    const navg = useNavigate();

    const handleBack = () => {
        navg('/')
    }
  return (
    <div className='error_content'>
        <h3>Page not found</h3>
        <button onClick={handleBack}>Return To homepage</button>
    </div>
  )
}
