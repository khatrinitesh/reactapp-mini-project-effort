import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import axios from 'axios';

export default function Service() {

  const [user,setUser] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  useEffect(() => {

    const fetchDataAxios = async () => {
      setLoading(true)
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        if(!response.ok){
          throw new Error('sorry something went wrong')
        }
        const data = await response.json()
        setUser(data)
        setLoading(false)
      }
      catch(error){
        setError(error.message)
        setLoading(false);
      }
    }

    // const fetchData = async () => {
    //   setLoading(true)
    //   try{
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     if(!response.ok){
    //       throw new Error('sorry something went wrong')
    //     }
    //     const data = await response.json()
    //     setUser(data)
    //     setLoading(false)
    //   }
    //   catch(error){
    //     setError(error.message)
    //     setLoading(false)
    //   }
    // }
    fetchDataAxios()
  },[])


  const btnRemove = (id) => {
    const finalData = user.filter((item) => item.id !== id)
    setUser(finalData)
  }


  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  if(error){
    return(
      <div>{error}</div>
    )
  }
  return (
    <div className='content'>
        <Banner bannerTitle="Service page" bannerDesc="Lorem Ipsum"/>
        {user.map((val,index) => {
          const {title,body,userId,id} = val
          return(
            <div key={index}>
              <h3>{title}</h3>
              <p>{body}</p>
              <p>{userId}</p>
              <button onClick={() => btnRemove(id)}>Remove</button>
            </div>
          )
        })}
    </div>
  )
}
