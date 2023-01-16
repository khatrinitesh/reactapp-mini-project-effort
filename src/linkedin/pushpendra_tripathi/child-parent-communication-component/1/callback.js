import React,{useState} from 'react'

const CallBack = ({getColor}) => {

    const [activeColor,setActiveColor] = useState('');


    const handleChange = (e) => {
        const {value} = e.target;
        setActiveColor(value);
        getColor(value);
    }
    
  return (
    <div>
        <input type='text' id='input' onChange={handleChange} value={activeColor}/>
    </div>
  )
}

export default CallBack