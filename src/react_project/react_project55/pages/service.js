import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

  const [user,setUser] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState('')

  const fetchPost = async () => {
    setLoading(true)
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if(!response.ok){
        throw new Error('sorry something sent wrong')
      }
      const data = await response.json()
      setUser(data)
      setLoading(false)
    }
    catch(error){
      setError(error)
    }
  }

  const btnRemove = (id) => {
    const finalData = user.filter((val) => val.id !== id)
    setUser(finalData)
  }

  useEffect(() => {
    fetchPost();
  },[])

  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  if(error){
    return(
      <div>{error.message}</div>
    )
  }
  return (
    <div className='content'>
        <Banner bannerTitle="Service" bannerDesc="lorem ipsum"/>
        {user.map((val,index) => {
          return(
            <div key={index}>
              <h3>{val.title}</h3>
              <p>{val.body}</p>
              <button onClick={() => btnRemove(val.id)}>Remove</button>
            </div>
          )
        })}
    </div>
  )
}
