import React from 'react';
import Banner from '../components/banner';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigation = useNavigate();

    const btnBack = () => {
        navigation('')
    }
  return (
    <div className='content'>
        <Banner bannerTitle="Error" bannerDesc="Lorem Ipsum"/>
=======
import {useNavigate} from 'react-router-dom';

export default function Service() {

    const navigation = useNavigate();

    const btnBack = () => {
        navigation('/')
    }
  return (
    <div className='content'>
        <Banner bannerTitle="Error page not found page" bannerDesc="Lorem Ipsum"/>
>>>>>>> d902be640f29ac20838702ffa91e7d6fe6587d3b
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
