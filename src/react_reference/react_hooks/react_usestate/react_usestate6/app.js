import React, { useState,useEffect,useRef } from 'react'

export default function CustomApp() {
  return (
    <div>
        <UseHover/>
    </div>
  )
}


function UseHover(){
    const [value,setValue] = useState(false);
    const ref = useRef(null);


    const handleMouseOut = () => setValue(true)
    const handleMouseOver = () => setValue(false)


    useEffect(
        () => {
          const node = ref.current;
          if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);
            return () => {
              node.removeEventListener("mouseover", handleMouseOver);
              node.removeEventListener("mouseout", handleMouseOut);
            };
          }
        },
        [ref.current] // Recall only if ref changes
      );
      return [ref, value];
}