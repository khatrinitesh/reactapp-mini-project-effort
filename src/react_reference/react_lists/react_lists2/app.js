import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
        <Example/>
    </div>
  )
}

let i = 0;
function Example(){
    const [list,setList] = useState([])

    const add = () => {
        setList(list.concat(<button onClick={add} key={i}>{i++}</button>))
    }
    return(
        <>
            <div className='app'>
                <button onClick={add}>Add</button>
                {list.map(val => val)}
            </div> 
        </>
    )
}
