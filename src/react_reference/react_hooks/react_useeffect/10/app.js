import React,{useEffect} from 'react'

export default function CustomApp() {

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>app</div>
  )
}
