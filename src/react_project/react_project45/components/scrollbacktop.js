import React,{useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

export default function ScrollBackTop() {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    window.addEventListener('scroll', toggleVisible);

  return (
    <>
         <button  onClick={scrollToTop} className='btn_scrollbacktop' style={{display: visible ? 'inline' : 'none'}} >
            <FaArrowCircleUp  />
        </button>
    </>
  )
}

