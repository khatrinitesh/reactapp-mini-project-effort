import React, { useCallback, useState } from "react";

export default function CustomApp() {
    const [count,setCount] = useState({
        id:'abcd',
        num:0
    })

    const [show,setShow] = useState(false)

    const handleChange = useCallback(() => {
        return count.num * 2
    },[count])

    const handleAdd = () => {
        setCount((prev) => {
            return{
                ...prev,
                num:prev.num + 1
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
  return (
    <div>
        <button onClick={handleSubtract}>-</button>
        <span>{count.num}</span>
        <button onClick={handleAdd}>+</button>
        <Child setShow={setShow} handleChange={handleChange}/>
        {show && <span>{count.id}</span>}
    </div>
  )
}

const Child = React.memo(({handleChange,setShow}) => {
    console.log('child ran');

    return(
        <>
            <p>{handleChange()}</p>
            <button onClick={() => setShow((prev) => !prev)}>Change</button>
        </>
    )
});