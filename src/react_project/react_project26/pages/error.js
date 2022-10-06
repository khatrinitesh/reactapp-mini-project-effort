import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/banner';

export default function Error() {

    const CustomNav = useNavigate()

    const btnNav = () => {
        CustomNav("/")
    }
  return (
    <div className='error_content'>
        <Banner bannerTitle={"Error page not found"} bannerDesc={"Minim quis mollit sint voluptate deserunt culpa sit voluptate culpa."}/>
        <button onClick={btnNav}>Return to homepage</button>
    </div>
  )
}
