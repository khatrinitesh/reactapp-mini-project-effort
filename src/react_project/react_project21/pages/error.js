import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const anchor = useNavigate();
    const btnBack = () => {
        anchor('/')
    }
  return (
    <>
    <div className='content jumbotron'>
    <Banner bannerTitle={"Error"} bannerDesc={"Ad aute aliqua aliqua velit dolor."}/>
    <button className="btn btn-primary" onClick={btnBack}>Return to homepage</button>
    </div>
    </>
  )
}
