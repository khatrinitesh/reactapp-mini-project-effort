import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Contact() {

    const nav = useNavigate();

    const btnBack = () => {
        nav('/')
    }
  return (
    <div className='content'>
      <Banner bannerTitle="404 page not found" bannerDesc="Quis duis duis ad laboris enim ex commodo ullamco esse duis culpa amet. Amet sunt eu irure dolore elit. Ipsum magna magna consectetur eu pariatur. Consequat eiusmod Lorem duis consectetur sit. Voluptate in quis aute velit. Excepteur excepteur laboris deserunt do cupidatat non.

Ea ex quis deserunt elit amet. Deserunt dolor non cupidatat voluptate aute cillum ea eu anim non sint minim. Dolor ad nulla est pariatur."/>
<button onClick={btnBack}>Back Homepage</button>
    </div>
  )
}
