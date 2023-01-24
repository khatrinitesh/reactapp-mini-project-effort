import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('');


    const fetchData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('sorry something went wrong')
            }
            const data = await response.json()
            setData(data)
        }
        catch(e) {
            setError(e.message)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const btnDel = (id) => {
        const finalData = data.filter((item) => item.id !== id)
        setData(finalData)
    }

   
  return (
    <div className='content'>
        <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
        {/* <button onClick={handleSubmit}>Click fetch</button> */}
        {data.map((val,index) => {
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
