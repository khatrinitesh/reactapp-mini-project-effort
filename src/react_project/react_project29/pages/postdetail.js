import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BlogPost from '../components/blogpost';
import {getPost} from '../utils/api';


export default function PostDetail() {

    const [error,setError] = useState()
    const [post,setPost] = useState();
    const [isLoading,setIsLoading] = useState(false);

    const params = useParams();

    const {id} = params;

    useEffect(() => {
        async function loadPost(){
            setIsLoading(true)
            try{
                const post = await getPost(id)   
                setPost(post);
            }
            catch(error){
                setError(error.message);
            }
            setIsLoading(false)
        }
        loadPost()
    },[])
  return (
    <div>
        {isLoading && <p>Loading post...</p>}
        {error && <p>{error.message}</p>}
        {!error && post && <BlogPost title={post.title} text={post.body}/>}
    </div>
  )
}
