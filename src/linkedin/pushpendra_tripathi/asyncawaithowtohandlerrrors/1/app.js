import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function CustomApp() {

    const [post,setPost] = useState([]);

    const fetchPost = async () => {
        try{
            const response = await axios('https://jsonplaceholder.typicode.com/todos/1')
            setPost(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPost();
    },[])
  return (
    <div>
        <p>{post.title}</p>
        <p>{post.completed}</p>
        <p>{post.userId}</p>
        <p>{post.id}</p>
    </div>
  )
}


