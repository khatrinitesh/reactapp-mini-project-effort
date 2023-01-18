import React, { useEffect } from 'react';
import axios from 'axios';

export default function CustomApp() {

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => console.log(res.data));
    })
  return (
    <div>
        Using the fetch api - axios
    </div>
  )
}
