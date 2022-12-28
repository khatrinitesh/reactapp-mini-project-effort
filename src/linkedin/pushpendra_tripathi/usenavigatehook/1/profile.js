import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    let navigate = useNavigate();
  return (
    <div>
        <a onClick={ () => navigate('/')}>Back</a>
        Profile Page
    </div>
  )
}
