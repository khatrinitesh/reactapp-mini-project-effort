import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

export default function Home() {

  const [post,setPost] = useState([])
  const [error,setError] = useState('')
  useEffect(() => {
    axios.get(`${baseURL}/asdsd`).then((response) => {
      setPost(response.data)
    })
    .catch(error => {
      setError(error);
    })
  })


  if(error) return `Error ${error.message}`;
  if(!post) return `No post`
  return (
    <div className='content'>
        <Banner bannerTitle={"Home"} bannerDesc={"Ipsum nostrud occaecat id aliqua qui anim cupidatat officia."}/>
        <div className='card'>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
    </div>
  )
}
