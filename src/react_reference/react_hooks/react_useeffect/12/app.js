import React,{useEffect} from 'react';
import axios from 'axios';

export default function CustomApp() {

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => console.log(response.data))
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>Different ways to fetch data</div>
  )
}
