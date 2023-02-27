import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

export default function CustomApp() {

    const [isLoading,error,data] = useQuery('posts',() => axios('https://jsonplaceholder.typicode.com/posts')) 
    console.log(data);
  return (
    <div>different ways to fetch data</div>
  )
}
