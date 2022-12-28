import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const btnBack = useNavigate();

    function handleBack(){
        btnBack("/");
    }
  return (
    <div className='error_content'>
        <h3>404 page not found</h3>
        <button onClick={handleBack}>Return to homepage</button>
    </div>
  )
}
