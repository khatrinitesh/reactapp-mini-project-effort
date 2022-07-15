import React,{useState} from 'react'

export default function CustomApp() {

    const [state,setState] = useState(1)
  return (
    <div>
        {state}
        <button onClick={() => setState(state + 1)}>Click to re-render {state}</button>
    </div>
  )
}

