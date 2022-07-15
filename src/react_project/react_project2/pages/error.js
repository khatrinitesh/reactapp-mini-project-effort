import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();
  return (
    <div className='error_content'>
        <h3>Page not found</h3>
        <button onClick={() => navigate('/')}>Return to homepage</button>
    </div>
  )
}
