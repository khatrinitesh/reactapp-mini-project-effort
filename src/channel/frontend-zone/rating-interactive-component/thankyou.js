import React from 'react';
import Card from './card';
import { useNavigate } from 'react-router-dom';

export default function ThankYou({rating}) {

    let navigate = useNavigate();
    function handleClick() {
        navigate('/home')
    }
  return (
    <Card>
    <button onClick={handleClick}>GoBack</button>
    <div className='thankyou_container'>
        Thank you
    </div>
    <div className='selected'>
     <p>Selected {rating} out of 5</p>
    </div>
    <h2 className='title'>Thank you</h2>
    <p className='text'>we appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch!</p>
    </Card>
  )
}
