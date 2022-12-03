import React,{useState} from 'react'

export default function CustomApp() {
    
    const [box1,setBox1] = useState(false);
    const [box2,setBox2] = useState(false);

    const Clickbox1 = () => {
        setBox1(true)
        setBox2(false)
    }
    const Clickbox2 = () => {
        setBox1(false)
        setBox2(true)
    }
  return (
    <div>
        <button className={box1 ? 'active' : 'dactive'} onClick={Clickbox1}>btn 1</button>
        <button className={box2 ? 'active' : 'dactive'}  onClick={Clickbox2}>btn 2</button>
    </div>
  )
}
