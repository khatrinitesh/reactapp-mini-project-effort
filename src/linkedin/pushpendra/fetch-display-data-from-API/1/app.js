import React,{useState,useEffect} from 'react';
import axios from 'axios';


export default function CustomApp() {

    const [dataList,setDataList] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setDataList(data));

    },[])
  return (
    <div>
        {dataList && dataList.map((obj) => {
            return(
                <div key={obj.id}>
                    <h3>{obj.title}</h3>
                    <p>{obj.body}</p>
                </div>
            )
        })}
    </div>
  )
}


