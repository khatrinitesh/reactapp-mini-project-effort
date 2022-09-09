import React, { useEffect, useState } from "react";
import Banner from '../components/banner';

export default function Service() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const btnRemove = (id) => {
        const finalData = users.filter((item) => item.id !== id)
        setUsers(finalData)
    }

    const fetchData = async () => {
        setLoading(true)
        try{
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
          if(!response.ok){
            throw new Error(`sorry, something went wrong`)
          }
          const data = await response.json()
          setUsers(data)
          setLoading(false)
        }
        catch(error){
            setError(error.message)
          setLoading(false)
        }
      }

    useEffect(()=>{
        fetchData()
    },[])

    if(loading){
        return <div>loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Service page"} bannerDesc={"Nulla minim duis nisi consectetur magna pariatur"}/>
        {users.map((user,i) => {
            return(
                <div key={i}>
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                    <button onClick={() => btnRemove(user.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
