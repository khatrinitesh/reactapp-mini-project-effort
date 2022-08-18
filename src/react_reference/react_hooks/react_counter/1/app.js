import React, { forwardRef, useImperativeHandle, useState } from "react";

const Counter = forwardRef((props,ref) => {
    const [count,setCount] = useState({
        num:5,
        id:'abcd'
    })

    const handleAdd = () => {
        setCount((prev) => {
            return{
                ...prev,
                num:prev.num + 1,
            }
        })
    }

    const handleSubtract = () => {
        setCount((prev) => {
            return{
                ...prev,
                num:prev.num - 1
            }
        })
    }

    useImperativeHandle(ref,() => ({
        handleAdd,handleSubtract
    }))

    return (
    <>
     <button onClick={handleAdd}>+</button>
    <span>{count.num}</span>
    <button onClick={handleSubtract}>-</button>
    <span>{count.id}</span>
    </>
    )
})


export default Counter;