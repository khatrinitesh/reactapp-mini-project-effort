import React,{useState} from 'react'

export default function ColorGenerator() {
    const [UIColor,setUIColor] = useState(null);

    const getColor = (color) => {
        setUIColor(color);
    }
  return (
    <div>
        <div style={{background:`${UIColor}`}}>
            <CustomColor getColor={getColor}/>
        </div>
    </div>
  )
}

const CustomColor = ({getColor}) => {

    const [activeColor,setActiveColor ] = useState('');

    const handleChange = (e) => {
        const {value} = e.target;
        setActiveColor(value);
        getColor(value);
    }

    return(
        <>
            <input type='text' value={activeColor} onChange={handleChange}/>
        </>
    )
}
