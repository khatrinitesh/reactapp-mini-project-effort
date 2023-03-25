import React,{useEffect,useState} from 'react';
import Banner from '../components/banner';
import axios from 'axios';

export default function Contact() {

  // const getPosts = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/post11s')
  //   .then((json) => console.log(json.data))
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }

  const getPosts = async() => {
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(res.data);
    }
      catch(error){
        console.log(error)
      }
  }

  useEffect(() => {
    getPosts()
  },[])
  return (
    <div className='content'>
        <Banner bannerTitle="Contact page" bannerDesc="Lorem Ipsum"/>
    </div>
  )
}
