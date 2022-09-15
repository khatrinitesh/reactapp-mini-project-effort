import React,{useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';


export default function ScrollTop() {

     const [visible, setVisible] = useState(false)

     const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 100){
            setVisible(true)
        }
        else if(scrolled <= 100){
            setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };

      window.addEventListener('scroll', toggleVisible);
  return (
        <>
        <span className='btn_scrolltop'>
            <FaArrowCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
        </span>
            
    </>
  )
}
