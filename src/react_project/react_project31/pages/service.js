import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

  const [allData,setAllData] = useState([]);
  const [allFilteredData,setFilteredData] = useState(allData);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  const fetchData = async() => {
    setLoading(true)
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if(!response.ok){
        throw new Error('sorry something sent wrong')
      }
      const data = await response.json()
      setAllData(data)
      setFilteredData(data)
      setLoading(false)
    }
    catch(error){
      setError(error.message)
    }
  }

  const btnDelete = (id) => {
    const finalData = allFilteredData.filter((item) => item.id !== id)
    setFilteredData(finalData)
  }

  const handleChangeSearch= (e) => {
    let value = e.target.value 
    let result = []
    result = allData.filter((data) => {
      return data.title.search(value) != -1
    })
    setFilteredData(result)
  }

  useEffect(() => {
    fetchData()
  },[])

  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>{error}</div>
  }
  return (
    <div className='content'>
        <Banner bannerTitle={"Service"} bannerDesc={"Officia voluptate laborum sit id est eiusmod veniam duis."}/>
        <input type="text" onChange={handleChangeSearch}/>
        {allFilteredData.map((val,id) => {
          return(
            <div key={id}>
              <h3>{val.title}</h3>
              <p>{val.body}</p>
              <button onClick={() => btnDelete(val.id)}>Remove</button>
            </div>
          )
        })}
    </div>
  )
}
