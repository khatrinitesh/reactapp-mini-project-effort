import React from 'react';
import Banner from '../components/banner';
import { useParams } from "react-router-dom"

export default function Post() {
    let params = useParams();

  return (
    <div className='content'>
        <Banner bannerTitle="Post" bannerDesc="Lorem Ipsum"/>
        <h1>{params.postId}</h1>
    </div>
  )
}
