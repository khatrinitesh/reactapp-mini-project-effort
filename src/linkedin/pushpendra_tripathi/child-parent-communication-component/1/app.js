import React,{useState} from 'react';
import CallBack from './callback';

export default function CustomApp() {

    const [UIColor,setUIColor] = useState(null);

    const getColor = (color) => {
        setUIColor(color);
    }
  return (
    <div>
        <div className='app_color_container' style={{background:`${UIColor}`}}>
            <CallBack getColor={getColor}/>
        </div>
    </div>
  )
}


