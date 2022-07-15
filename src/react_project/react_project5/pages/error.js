import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();

    function handleBack(){
        navigate('/')
    }
  return (
    <div className='error_content'>
        <h3>Page not found</h3>
        <button onClick={handleBack}>Return to homepage</button>
    </div>
  )
}
