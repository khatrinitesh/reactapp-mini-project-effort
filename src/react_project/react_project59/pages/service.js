import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function Service() {
  

  const {firstLoading,serverError,apiData} = useFetch('https://jsonplaceholder.typicode.com/posts')
  return(
    <>
    {firstLoading && <span>Loading...</span>}

    {firstLoading && serverError ? (<span>Error in fetching data ...</span>) : (<span>{JSON.stringify(apiData)}</span>)}
    </>
  )
}


const useFetch = (url)=>{
  const [apiData,setApiData] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [serverError,setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try{
        const resp = await axios.get(url)
        // eslint-disable-next-line no-use-before-define
        const data = await resp ? data : setApiData(data)
        setIsLoading(false)
      }
      catch(error){
        setServerError(error)
        setIsLoading(false)
      }
    }
    fetchData();
  },[url])

  return {isLoading,apiData,serverError}
}