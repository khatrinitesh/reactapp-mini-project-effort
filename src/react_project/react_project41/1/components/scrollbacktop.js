import React,{ useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa";

export default function ScrollBackTop() {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top:0,
            bevhavior:'smooth'
        })
    }
  return (
    <>
      {showTopBtn && (<FaAngleUp className='icon-position icon-style' onClick={goToTop}/>)}
    </>
  )
}
