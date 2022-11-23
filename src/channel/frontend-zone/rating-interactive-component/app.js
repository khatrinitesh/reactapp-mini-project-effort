import React ,{useState} from 'react';
import Rating from './rating';
import ThankYou from './thankyou';


export default function CustomApp() {

  const [showThankYouPage,setShowThankYoupage] = useState(false);
  const [rating,setRating] = useState(null);
  return (
    <div>
      {showThankYouPage ? <ThankYou/> : <Rating rating={rating} setRating={setRating} setShowThankYoupage={setShowThankYoupage}/>}
    </div>
  )
}
