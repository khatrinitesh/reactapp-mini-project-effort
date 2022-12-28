import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function About() {
  const [isActive,setIsActive] = useState(false);

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const [data,setData] = useState([]);

  const fetchData = async () => {
    setLoading(true)
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!response.ok){
            throw new Error(`sorry something went wrong`)
        }
        const data = await response.json()
        setData(data)
        setLoading(false)
    }
    catch(error){
        setError(error.message)
        setLoading(false)
    }
}

  useEffect(() => {
    fetchData();
  },[])

  const btnToggle = () => {
    setIsActive(!isActive);
  }

  const btnRemove = (id) => {
    const finalData = data.filter((item) => item.id !== id)
    setData(finalData)
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
      <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
      <button className={isActive ? 'active' : 'inactive'} onClick={btnToggle}>{isActive ? 'nitesh' : 'sameet'}</button>
      {isActive ? 'nitesh' : 'sameet'}

      {data.map((item,i) => {
        return(
          <div key={i}>
           <h3>{item.title}</h3>
           <p>{item.body}</p>
           <button onClick={() => btnRemove(item.id)}>Remove</button>
          </div>
        )
      })}
      
    </div>
  )
}
