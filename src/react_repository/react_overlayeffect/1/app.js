import React,{useState} from 'react';
import './custom.css';

export default function CustomApp() {

    const [overlay,setOverlay] = useState(false);

    const btnModalOpen =() => {
        setOverlay(true);
    }

    const btnModalClose = () => {
        setOverlay(false)
    }


  return (
    <>
    {overlay && (<div overlay="true" className='overlay_effect'>
            <h3>Head title</h3>
            <p>Duis dolor nulla magna quis excepteur proident ex nisi eu nulla officia.</p>
            <a className='icon_close' onClick={btnModalClose}>&times;</a>
        </div>)}
        
        <button onClick={btnModalOpen} className="btn btn-primary">Click Modal Open</button>
    </>
  )
}
