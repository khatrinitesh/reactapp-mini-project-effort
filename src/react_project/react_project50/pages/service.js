import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

  const [user,setUser] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  const fetchData = async () => {
    setLoading(true)
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if(!response.ok){
        throw new Error('sorry sent something went')
      }
      const data = await response.json()
      setLoading(false);
      setUser(data);
    }
    catch(e){
      setError(e.message)
      setLoading(false);
    }
  }

  const btnDel = (id) => {
    const finalData = user.filter((val) => val.id !== id)
    setUser(finalData)
  }

  useEffect(() => {
    fetchData()
  },[])

  if(loading){
    return(
      <div>please wait for sometime...</div>
    )
  }

  if(error){
    return(
      <div>{error}</div>
    )
  }
  return (
    <div className='content'>
      <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
      {user.map((use,val) =>{ 
        return(
          <div key={val}>
            <h3>{use.title}</h3>
            <p>{use.body}</p>
            <button onClick={() => btnDel(use.id)}>&times;</button>
          </div>
        )
      })}
    </div>
  )
}
