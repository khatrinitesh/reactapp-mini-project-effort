import React,{useState} from 'react'

export default function CustomPopUp({text, closePopup }) {

    const [open, setOpen] = useState(false);
  return (
    <div>
        <button onClick={() => setOpen(true)}> Click to Open       Popup</button>
        {open ? <Popup text="hello there" closePopup={() => setOpen(false)}/> : null}
    </div>
  )
}


const Popup = ({text,closePopup}) =>{
    return (
        <div className='popup-container'>
            <div className='popup-body'>
                <h3>{text}</h3>
                <button onClick={closePopup}>&times;</button>
            </div>
        </div>
      )
}