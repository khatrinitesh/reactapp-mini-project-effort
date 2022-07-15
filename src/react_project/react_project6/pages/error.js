import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/')
    }
     
  return (
    <div className='error_content'>
        <h3>page not found</h3>
        <button onClick={handleBack}>Return to homepage</button>
    </div>
  )
}
