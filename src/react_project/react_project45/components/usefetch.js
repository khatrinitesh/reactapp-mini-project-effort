import React,{useState,useEffect} from 'react';

export default function CustomFetch() {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const finalData = await response.json()
        setData(finalData)
        setLoading(false)
    }

    const btnDel = (id) => {
        const finalData = data.filter((val) => val.id !== id)
        setData(finalData);
    }
    

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
  return (
    <div>
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
