import React,{useEffect} from 'react';

export default function CustomApp() {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos') 
        .then((res) => res.json())
        .then(json => console.log(json))
    },[])
  return (
    <div>
        Using the fetch api
    </div>
  )
}
