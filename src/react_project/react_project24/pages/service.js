import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

    const [allData,setAllData] = useState([])
    const [filteredData,setFilteredData] = useState(allData)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

    const handleSearch = (e) => {
        let value = e.target.value 
        let result = []
        result = allData.filter((data) => {
            return data.title.search(value) != -1 
        })
        setFilteredData(result)
    }

    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error(`sorry something went wrong`)
            }
            const data = await response.json()
            console.log(data)
            setAllData(data)
            setFilteredData(data)
            setLoading(false)
        }
        catch(error){
            setError(error.message)
            setLoading(false)
        }
    }

    const btnDel = (id) => {
        const finalData = filteredData.filter((item) => item.id !== id)
        setFilteredData(finalData)
    }

    useEffect(()=> {
        fetchData()
    },[])

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Service"} bannerDesc={"Reprehenderit adipisicing pariatur culpa adipisicing ex dolore incididunt duis esse reprehenderit qui."}/>
        <input type="search" onChange={handleSearch}/>
        <div className='row'>
            {filteredData.map((val,id) => {
                return(
                    <div className='col-4 mb-3'>
                        <div key={val.id} className='card p-3'>
                            <h3>{val.title}</h3>
                            <p>{val.body}</p>
                            <button onClick={() => btnDel(val.id)}>&times;</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
