import React,{useState} from 'react'

export default function Service() {
    const [toggle,setToggle] = useState(false);
    const txt = toggle ? 'sameet' : 'nitesh';

    const toggleFunc = () => {
        setToggle(!toggle)
    }
  return (
    <div>
        <div className={toggle ? 'container-fluid' : 'container'}>
            {txt}
            <button onClick={toggleFunc}>Toggle</button>
        </div>
    </div>
  )
}
