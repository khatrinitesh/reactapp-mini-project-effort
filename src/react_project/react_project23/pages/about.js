import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import CustomTodo from '../components/todo/todo'
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function About() {
    const [post,setPost] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data)
        });
    },[])

    const [count,setCount] = useState(0)
    const [isActive,setIsActive] = useState(false)

    const btnInc = () => {
        setCount(prevCount => prevCount + 1)
    }
    const btnDec = () => {
        setCount(prevCount => prevCount - 1)
    }
    const btnReset = () => {
        setCount(0)
    }
    const btnToggle = () => {
        setIsActive(!isActive)
    }

    // create post
    const createPost = () => {
        axios.post(baseURL,{
            title:'HI Sameet',
            body:'How are you doing? what are you doing?'
        })
        .then((response) => {
            setPost(response.data);
        })
    }

    // updated post
    const updatePost = () => {
        axios.put(`${baseURL}/1`,{
            title:'Hi Mom',
            body:'This is an updated post.'
        })
        .then((response) => {
            setPost(response.data)
        })
    }

    // delete post
    function delPost(){
        axios.delete(`${baseURL}/1`).then(() => {
            alert('post deleted!')
            setPost(null)
        })
    }
    if(!post) return 'No post!'
    

  return (
    <div className='content'>
        <Banner bannerTitle={"About"} bannerDesc={"Ipsum nostrud occaecat id aliqua qui anim cupidatat officia."}/>
        <CustomTodo/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>

        <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-success'}>{isActive ? "nitesh" : "sameet"}</button>
        {isActive ? "nitesh" : "sameet"}

        <div className='card p-3'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className='d-flex'>
                <button onClick={createPost}>Create Post</button>
                <button onClick={updatePost}>Update Post</button>
                <button onClick={delPost}>Delete Post</button>
                
            </div>
        </div>
    </div>
  )
}
