import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {
  const [ users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [err,setErr] = useState('')

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
    catch(err){
      setErr(err.message)
      setLoading(false)
    }
  }

  const btnRemove = (id) => {
      const finalData = users.filter((item) => item.id !== id)
      setUsers(finalData)
  }

  useEffect(() => {
    fetchData()
  },[])

  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  if(err){
    return(
      <div>{err}</div>
    )
  }
  return (
    <div className='content'>
        <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
        {users.map((user) => {
          return(
            <div className='card_block' key={user.id}>
              <h2>{user.title}</h2>
              <p>{user.body}</p>
              <button onClick={() => btnRemove(user.id)}>Remove</button>
            </div>
          )
          
        })}
    </div>
  )
}
