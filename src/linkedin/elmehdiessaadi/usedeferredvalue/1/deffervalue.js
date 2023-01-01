import React,{useState,useEffect,useDeferredValue} from 'react';

export default function DefferValue() {

    const [value,setValue]  = useState("")
    const deferredValue = useDeferredValue(value);

    function handleChange(e){
        setValue(e.target.value);
    }

    useEffect(() => {

    },[deferredValue])

  return (
    <div>
        <input type="text" value={value} onChange={handleChange}/>
        {value}
    </div>
  )
}
