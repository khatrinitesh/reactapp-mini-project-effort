import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function CustomApp() {
  return (
    <div>
        <GenerateApp/>
    </div>
  )
}

function GenerateApp(){
    const [generatedExcuse,setGeneratedExcuse] = useState('')

    const fetchExcuse = (excuse) => {
        axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
            setGeneratedExcuse(res.data[0].excuse)
        })
    }

    useEffect(() => {
        fetchExcuse()
    },[])

    
    return(
        <>
            <h1>Generate an Excuse</h1>
            <button onClick={() =>fetchExcuse('party')}>Party</button>
            <button onClick={() =>fetchExcuse('family')}>Family</button>
            <button onClick={() =>fetchExcuse('office')}>Office</button>
            <p>{generatedExcuse}</p>
        </>
    )
}

function DataApi(){

    const [contentdata,setContentData] = useState([])

    // const fetchData = () => {
    //     fetch('https://catfact.ninja/fact').then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //     })
    // }

    // const fetchData = () => {
            
    // }

    const fetchCatFact = () => {
        axios.get('https://catfact.ninja/fact').then((res) => {
                setContentData(res.data.fact)
                console.log(res.data.fact)
        })
    }

    useEffect(() => {
        axios.get('https://catfact.ninja/fact').then((res) => {
                setContentData(res.data.fact)
                console.log(res.data.fact)
        })
    },[])
    return(
        <>
        <button onClick={fetchCatFact}>Generate cat fact</button>
        <p>{contentdata}</p>
        </>
    )
}

function PredictApp(){

    const [name,setName] = useState('')
    const [predictAge,setPredictAge] = useState(null)
    const fetchData = () => {
        axios.get(`https://api.agify.io?name=${name}`).then((res) => {
            setPredictAge(res.data)
            console.log(res.data)
        })
    }
    

    const handleChange = (e) => {
        setName(e.target.value)
    }
    
    useEffect(() => {
        fetchData()
    },[])
    return(
        <>
        <input type="text"  placeholder='Ex. Nitesh' onChange={handleChange}/>
        <button onClick={fetchData}>Predict Age</button>
        
        
        <h1>Name: {predictAge?.name}</h1>
        <h1>Predict Age: {predictAge?.age}</h1>
        <h1>Count: {predictAge?.count}</h1>
        </>
    )
}


