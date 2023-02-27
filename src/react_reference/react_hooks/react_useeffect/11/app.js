import React,{useEffect} from 'react';
import axios from 'axios';

export default function CustomApp() {

    const fetchData = () => {
        (async () => {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                console.log(response.data)
            }
            catch(error){
                console.log(error)
            }
        })()
    }


    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>Different ways to fetch data</div>
  )
}
