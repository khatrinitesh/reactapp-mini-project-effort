import React ,{ useEffect, useState } from 'react';
import Posts from '../components/posts';
import {getPosts} from '../utils/api';

export default function BlogPosts() {

    const [error,setError] = useState();
    const [posts,setPosts] = useState();
    const [isLoading,setIsLoading] = useState(false)

    useEffect(() => {
        async function loadPosts(){
            setIsLoading(true);
            try{
                const posts = await getPosts();
                setPosts(posts);
            }
            catch(err){
                setError(err.message);
            }
            setIsLoading(false);
        }
        loadPosts();
    },[])
  return (
    <>
        <h1>Our Blog posts</h1>
        {isLoading && <p>Loading posts...</p>}
        {error && <p>{error}</p>}
        {!error && posts && <Posts blogPosts={posts}/>}
    </>
  )
}
