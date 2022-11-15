import React,{useState,useEffect} from 'react';
import axios from 'axios';



export default function CustomApp() {
    const [dataList,setDataList] = useState([]);

    async function fetchData()  {
        const request = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setDataList(request.data)
        return request
    }

    useEffect(() => {
        fetchData();
    },[])

    const btnDel = (id) => {
        const finalData =dataList.filter((obj) => obj.id != id)
        setDataList(finalData)
    }
  return (
    <div>
        {dataList && dataList.map((obj) => {
            return(
                <div key={obj.id}>
                 <h2>
                  {obj.title}
                 </h2>
                 <p>
                 {obj.body}</p>
                 <button onClick={() => btnDel(obj.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
