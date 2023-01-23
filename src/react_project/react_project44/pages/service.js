import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import axios from 'axios';

export default function Service() {   

    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [data,setData] = useState([]);
    const [post,setPost] = useState([]);

    const fetchPost = async () => {
        try{
            const response = await axios('https://jsonplaceholder.typicode.com/todos');
            setPost(response.data);
        }
        catch(e){
            console.log(e);
        }
    }

    // const fetchData = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     setLoading(true)
    //     if(!response.ok){
    //         throw new Error('sorry, something went wrong')
    //     }
    //     try{
    //         const data = await response.json();
    //         setData(data);
    //         setLoading(false)
    //     }
    //     catch(e) {
    //         setError(e.message)
    //         setLoading(false)
    //     }
    // }

    useEffect(() => {
        // fetchData()
        fetchPost()
    },[])

    const btnRemove = (id) => {
        const finalData = data.filter((item) => item.id !== id)
        setData(finalData)
    }


    // if(loading){
    //     return(
    //         <div>Loading....</div>
    //     )
    // }
    // if(error){
    //     return(
    //         <div>
    //             {error.message}
    //         </div>
    //     )
    // }
  return (
    <div className='content'>
        <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
        {data.map((user) => {
            return(
                <div>
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                    <button onClick={() => btnRemove(user.id)}>Remove</button>
                </div>
            )
        })}
        {post.map((val) => {
            return(
                <divv>
                    <h3>{val.title}</h3>
                    <p>{val.completed}</p>
                </divv>
            )
        })}
    </div>
  )
}
