import React,{useState} from 'react';


export default function CustomApp() {

    const [data,setData] = useState({
        name:'',
        address:''
    });

    const handleChange = (e,property) =>{
        setData({
            ...data,
            [property]:e.target.value,
        });
    }

    const resetData = () => {
        setData({
            name:'',
            address:''
        })
    }



    
  return (
    <>
     <input type='text' placeholder='Enter Name' onChange={(e) => handleChange(e,'name')} value={data.name}/>
     <input type='text' placeholder='Enter Address' onChange={(e) => handleChange(e,'address')} value={data.address}/>
     <button onClick={resetData} type="reset">Reset</button>
    </>
  )
}
