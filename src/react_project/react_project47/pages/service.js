import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {


    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');


    const fetchData = async () => {
        setLoading(true);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('sorry, something went wrong');
            }
            const data = await response.json()
            setUser(data);
            setLoading(false)
        }
        catch(e){
            setError(error.message)
            setLoading(false)
        }
    }


    const btnDel =(id) => {
        const finalData = user.filter((item) => item.id !== id)
        setUser(finalData); 
    }


    useEffect(() => {
        fetchData()
    },[])


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
        <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
        {user.map((val,index) => {
            return(
                <div key={index}>
                    <h3>{val.title}</h3>
                    <p>{val.body}</p>
                    <button onClick={() => btnDel(val.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
