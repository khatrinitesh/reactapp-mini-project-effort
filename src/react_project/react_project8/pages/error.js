import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();

    function btnBack(){
        navigate('/')
    }
  return (
    <div className='content'>
        <h3>Page not found</h3>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
