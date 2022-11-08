import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const postsData = await response.json();
            setPosts(postsData);
            console.log(setPosts(postsData));
        }
        fetchPosts();
    },[]);

    const btnDel = (id) => {
        const finalData = posts.filter((item) => item.id !== id)
        setPosts(finalData)
    }

    const usePosts = posts.map((post) => {
        return(
            <div className='col-4 h-100'>
                <div className='card p-2 m-2 h-100'>
                    <h3>{post.id}</h3>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button onClick={() => btnDel(post.id)}>Remove</button>
                </div>
            </div>
        )
    })
  return (
    <div className='content'>
      <Banner bannerTitle={"Service"} bannerDesc={"Lorem Ipsum Lorem Ipsum"}/>
      <div className='row'>
        {posts && usePosts}
      </div>
    </div>
  )
}
