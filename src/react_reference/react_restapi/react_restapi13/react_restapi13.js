import React,{useState,useEffect} from 'react'

export default function CustomApp() {
    const [data,setData] = useState(null)

    const fetchData = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => res.json())
        .then((data) => setData(data))
    }

    useEffect(() => {
        fetchData()
    },[])

    const btnRemove = (id) => {
        const finalData = data.filter((item) => item.id !== id)
        setData(finalData)
    }
  return (
    <div>
        {data.map((item) => {
            return(
                <>
                <p key={item.id}>{item.title}</p>
                <button onClick={() => btnRemove(item.id)}>Remove</button>
                </>
            )
        })}
    </div>
  )
}
