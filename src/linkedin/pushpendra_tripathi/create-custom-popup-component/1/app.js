import React,{useState} from 'react';
import './custom.css';

export default function CustomApp() {

    const [isOpen,setIsOpen] = useState(false);

    const btnOpenModal = () => {
        setIsOpen(true)
    }
    const close = () => {
        setIsOpen(false)
    }
    
  return (
    <div>
        <button onClick={btnOpenModal}>Click Modal</button>
    {isOpen && (
        <div className="main overlay">
            <div className="box">
                Popup box
                <button onClick={close}>&#10006;</button>
            </div>
        </div>
    )}
    </div>
  )
}
