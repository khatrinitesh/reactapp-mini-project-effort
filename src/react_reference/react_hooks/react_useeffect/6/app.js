import { useState, useEffect } from 'react';

export default function CustomApp() {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
   

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => setError(error));
      },[])

      useEffect(() => {
        document.title = `my app | ${posts ? posts.title : 'Loading....'}`;
      },[posts])

      useEffect(() => {
        const interval = setInterval(() => {
            console.log('tick')
        },1000)
        return () => clearInterval(interval)
      },[]);


      if(error) {
        return <div>Error: {error.message}</div>
      }
      if(!posts){
        return <div>Loading...</div>
      }
  return (
    <div>
        <ul>
            {posts.map((post) => {
                return(
                    <li key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
