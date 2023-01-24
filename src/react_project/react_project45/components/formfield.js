import React,{useState} from 'react';

export default function FormField() {

    const [data,setData] = useState({
        name:'nitesh',
        address:''
    });

    const handleChange = (e,property) => {
        setData({
            ...data,
            [property]:e.target.value
        })
    }

    const resetData = () => {
        setData({
            name:'',
            address:''
        })
    }
  return (
    <>
        <input type='text' placeholder="Enter name" onChange={(e) => handleChange(e,'name')} value={data.name}/>
        <input type='text' placeholder="Enter Address" onChange={(e) => handleChange(e,'address')} value={data.address}/>
        <button onClick={resetData}>Reset</button>
    </>
  )
}
