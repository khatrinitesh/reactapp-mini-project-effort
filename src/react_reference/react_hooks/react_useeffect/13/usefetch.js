import React,{useState,useEffect} from 'react';
import axios from 'axios'

const useFetch = (url) => {
    const [isLoading,setIsLoading] = useState(false);
    const [apiData,setApiData] = useState(null);
    const [serverError,setServerError] = useState(null);


    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try{
                const repo = await axios.get(url)
                const data = await repo?.data
                setApiData(data)
                setIsLoading(false);
            }
            catch(error){
                setServerError(error.message)
                setIsLoading(false);
            }
        }
        fetchData()
    },[url])
  return {isLoading,apiData,serverError}
}

export default useFetch;