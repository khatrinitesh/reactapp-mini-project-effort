import React,{useImperativeHandle,forwardRef,useState} from 'react';

const Counter = forwardRef((props,ref) => {

    const[count,setCount] = useState({
        num:1,
        id:'abcd',
    });

    const handleAdd = () => {
        setCount((prev) => {
            return{
                ...prev,
                num:prev.num + 1
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

    useImperativeHandle(ref,() => ({
        handleAdd,
        handleSub
    }))
  return (
    <span>
        {count.num}
    </span>
  )
})

export default Counter;