import React ,{ useEffect, useState } from 'react'

export default function CustomApp() {
  return (
    <div>
        <HookEffect/>
    </div>
  )
}

function HookEffect(){
    const [count,setCount] = useState({
        id:'abcd',
        num:1
    })

    const handleAdd = () => {
        setCount((prev) => {
            return{
                ...prev,
                num:prev.num+1
            };
        });
    };

    const handleSub = () => {
        setCount((prev) => {
            return{
                ...prev,
                num:prev.num - 1
            };
        });
    };

    const [screenWidth,setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize",() => {
            setScreenWidth(window.innerWidth)
        })
        console.log('ran')

        return () => {
            console.log('ran returned')
        }
    },[count])


    return(
        <>
         <button onClick={handleSub}>-</button>
         <span>{count.num}</span>
         <span>{count.id}</span>
         <button onClick={handleAdd}>+</button>
         <p>{screenWidth}</p>
        </>
    )
}