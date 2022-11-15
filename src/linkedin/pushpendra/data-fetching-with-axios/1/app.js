import React,{useState,useEffect} from 'react';
import axios from 'axios';



export default function CustomApp() {
    const [dataList,setDataList] = useState(null);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setDataList(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

    const btnDel = (id) => {
        const finalData = dataList.filter((obj) => obj.id != id)
        setDataList(finalData)
    }
  return (
    <div>
        {dataList && dataList.map((obj) => {
            return(
                <div>
                  <h2>{obj.title}</h2>
                  <p>{obj.body}</p>
                  <button onClick={() => btnDel(obj.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
