import { useState, useEffect } from 'react';

export default function CustomApp() {

      const [posts, setPosts] = useState([]);

      useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
      },[])
  return (
    <div>
        {posts.map((val) => {
            return(
                <div key={val.id}>
                    <h3>{val.title}</h3>
                    <p>{val.body}</p>
                </div>
            )
        })}
    </div>
  )
}
