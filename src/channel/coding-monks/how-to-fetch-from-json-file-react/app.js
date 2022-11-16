import React,{useState,useEffect} from 'react'

export default function CustomApp() {
    const [ data,setData]  = useState([])


    const getData = () => {
        fetch('./data.json',{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((myjson) => {
            // console.log(data)
            setData(myjson)
        })
    }
    

    useEffect(() => {
        getData()
    },[])
  return (
    <div>
      {data.length > 0 && data.map((item) => {
        return(
            <div key={item.id}>
             <h3>{item.title}</h3>
             <p>{item.body}</p>
            </div>
        )
      })}
    </div>
  )
}
